const dom = (s) => document.querySelector(s);

const setAttribute = (el, attr, val) => el.setAttribute(attr, val);

const newElement = (el) => document.createElement(el);

const timestampFormat = (timestamp = Number, type = String) => {
  const newDate = new Date(timestamp);

  if (type === "date") {
    const month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    const day = ("0" + (newDate.getDate() + 1)).slice(-2);
    const year = newDate.getFullYear();
    return `${day}.${month}.${year}`;
  } else if (type === "time") {
    const options = { hour12: false, hour: "2-digit", minute: "2-digit" };
    const newTime = newDate.toLocaleTimeString("en-PL", options);
    return `${newTime}`;
  }
};

module.exports = {
  dom,
  setAttribute,
  newElement,
  timestampFormat,
};
