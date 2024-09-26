class Rectangular {
    width; height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getHeight() {
        return this.height;
    }
    getWidth() {
        return this.width;
    }
    setHeight(height) {
        this.height = height;
    }
    setWidth(width) {
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}

