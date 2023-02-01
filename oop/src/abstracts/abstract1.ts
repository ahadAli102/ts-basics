abstract class TakePhoto1 {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getSepia(): void

    getReelTime(): number {
        console.log('TakePhoto1');
        return 8;
    }
}


class Instagram1 extends TakePhoto1 {
    constructor(cameraMode: string, filter: string, public burst: number) {
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("Sepia");

    }

    getReelTime(): number {
        console.log("Instagram1");
        return 4;
    }

    day(){
        console.log('instagram day');
    }
}

const takePhoto1 : TakePhoto1 = new Instagram1("test", "Test", 3)
takePhoto1.getSepia();
takePhoto1.getReelTime();