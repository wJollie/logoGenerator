class Shape {
  constructor() {
    this.color = "black";
  }

  setColor(color) {
    this.color = color;
  }

  // Placeholder for the render method to be implemented in child classes
  render() {
    throw new Error("Render method not implemented.");
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="56" y="56" width="188" height="188" fill="${this.color}" />`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
