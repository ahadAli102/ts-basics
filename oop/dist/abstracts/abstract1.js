"use strict";
class TakePhoto1 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        console.log('TakePhoto1');
        return 8;
    }
}
class Instagram1 extends TakePhoto1 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
    getReelTime() {
        console.log("Instagram1");
        return 4;
    }
    day() {
        console.log('instagram day');
    }
}
const takePhoto1 = new Instagram1("test", "Test", 3);
takePhoto1.getSepia();
takePhoto1.getReelTime();
