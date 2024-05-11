function normalizeTime(value) {
  // Replace this comment with your code...
  const parts = value.split(/[: ]/);

  let hour;
  let min;
  let sec;
  if (parts.length === 3) {
    if (parts[0] < 0 || parts[0] > 23) {
      return null;
    }
    hour = Number(parts[0]);
    min = Number(parts[1]);
    sec = Number(parts[2]);
  } else if (parts.length === 4) {
    if (parts[0] < 1 || parts[0] > 12) {
      return null;
    }
    hour = parts[3] === 'AM' ? parts[0] : Number(Number(parts[0]) + Number(12));
    min = Number(parts[1]);
    sec = Number(parts[2]);
  } else {
    throw Error;
  }

  if (min >= 60 || min < 0) {
    return null;
  } else if (sec >= 60 || sec < 0) {
    return null;
  }

  return `(${hour}, ${min}, ${sec})`;
}

function formatTimes(...values) {
  // Replace this comment with your code...
  const normalizeTimes = values.map((value) => {
    const nt = normalizeTime(value);
    if (nt) {
      return nt;
    }
  });

  if (normalizeTimes.length >= 2) {
    return `[${normalizeTimes.join(', ')}]`;
  } else if (normalizeTimes.length === 1) {
    return `[${normalizeTimes[0]}]`;
  }

  return `[]`;
}
let result = formatTimes('4:26:24 PM');
console.log(result);
