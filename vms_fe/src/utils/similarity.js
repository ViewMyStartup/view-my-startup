const splitHangul = (char) => {
  const charCode = char.charCodeAt(0);
  const base = charCode - 0xac00;
  const cho = Math.floor(base / (21 * 28));
  const jung = Math.floor((base % (21 * 28)) / 28);
  const jong = base % 28;

  return [
    String.fromCharCode(0x1100 + cho), 
    String.fromCharCode(0x1161 + jung),
    jong !== 0 ? String.fromCharCode(0x11a7 + jong) : "",
  ];
};

const levenshteinDistanceJamo = (a, b) => {
  const splitA = splitHangul(a).join("");
  const splitB = splitHangul(b).join("");

  const an = splitA.length;
  const bn = splitB.length;
  if (an === 0) return bn;
  if (bn === 0) return an;

  const matrix = Array(an + 1)
    .fill(null)
    .map(() => Array(bn + 1).fill(null));

  for (let i = 0; i <= an; i += 1) {
    matrix[i][0] = i;
  }

  for (let j = 0; j <= bn; j += 1) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= an; i += 1) {
    for (let j = 1; j <= bn; j += 1) {
      const cost = splitA[i - 1] === splitB[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // 삭제
        matrix[i][j - 1] + 1, // 삽입
        matrix[i - 1][j - 1] + cost // 대체
      );
    }
  }

  return matrix[an][bn];
};

// 단어 단위로 분리
const tokenizeWords = (text) => {
  const result = [];
  let currentWord = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const charCode = text.charCodeAt(i);

    if (charCode >= 0xac00 && charCode <= 0xd7a3) {
      const [cho, jung, jong] = splitHangul(char);
      currentWord += cho + jung + (jong !== "" ? jong : "");
    } else if (/\w/.test(char)) {
      currentWord += char;
    } else {
      if (currentWord !== "") {
        result.push(currentWord);
        currentWord = "";
      }
    }
  }

  if (currentWord !== "") {
    result.push(currentWord);
  }

  return result;
};

// 단어 단위
const levenshteinDistanceWord = (a, b) => {
  const wordsA = tokenizeWords(a);
  const wordsB = tokenizeWords(b);

  const an = wordsA.length;
  const bn = wordsB.length;
  if (an === 0) return bn;
  if (bn === 0) return an;

  const matrix = Array(an + 1)
    .fill(null)
    .map(() => Array(bn + 1).fill(null));

  for (let i = 0; i <= an; i += 1) {
    matrix[i][0] = i;
  }

  for (let j = 0; j <= bn; j += 1) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= an; i += 1) {
    for (let j = 1; j <= bn; j += 1) {
      const cost = wordsA[i - 1] === wordsB[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // 삭제
        matrix[i][j - 1] + 1, // 삽입
        matrix[i - 1][j - 1] + cost // 대체
      );
    }
  }

  return matrix[an][bn];
};

// 가중치를 적용 [뭔가안됨;]
const wordSimilarity = (a, b) => {
  const wordsA = tokenizeWords(a);
  const wordsB = tokenizeWords(b);
  const maxLen = Math.max(wordsA.length, wordsB.length);

  let totalDistance = 0;
  for (let i = 0; i < wordsA.length; i++) {
    let minDistance = Infinity;
    for (let j = 0; j < wordsB.length; j++) {
      const distance = levenshteinDistanceWord(wordsA[i], wordsB[j]);
      minDistance = Math.min(minDistance, distance);
    }
    totalDistance += minDistance;
  }

  const lengthDifference = Math.abs(wordsA.length - wordsB.length);
  const similarity = 1 - totalDistance / (maxLen * 2 + lengthDifference);
  return similarity;
};

// 자모와 단어 단위를 혼합
const combinedSimilarity = (input, target) => {
  const jamoDistance = levenshteinDistanceJamo(input, target);
  const wordSimilarityValue = wordSimilarity(input, target);

  // 최종 유사도
  const combinedSimilarity =
    1 -
    (jamoDistance / (Math.max(input.length, target.length) + 1)) * 0.4 +
    wordSimilarityValue * 0.6;

  return combinedSimilarity;
};

// 가장 비슷한이름찾기
const findClosestMatch = (input, data) => {
  return data.reduce(
    (bestMatch, current) => {
      const similarity = combinedSimilarity(input, current.name);
      const lengthDifference = Math.abs(input.length - current.name.length);

      const isBetterMatch =
        similarity > bestMatch.similarity ||
        (similarity === bestMatch.similarity &&
          lengthDifference < bestMatch.lengthDifference);

      return isBetterMatch
        ? {
            ...current,
            similarity,
            lengthDifference,
          }
        : bestMatch;
    },
    {
      similarity: 0,
      lengthDifference: Infinity,
    }
  );
};

export {
  splitHangul,
  levenshteinDistanceJamo,
  tokenizeWords,
  levenshteinDistanceWord,
  wordSimilarity,
  combinedSimilarity,
  findClosestMatch,
};
