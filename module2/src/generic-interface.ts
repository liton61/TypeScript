{
    // generic with interface
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T;
        bike?: X
    }

    interface AppleWatch { brand: string, model: string, display: string }
    interface SamsungWatch { brand: string, model: string, heartTrack: boolean, sleepTrack: boolean }
    interface YamahaBike {
        brand: string;
        model: string;
        color: string;
        price: number
    }

    const SrDeveloper: Developer<AppleWatch> = {
        name: "John",
        computer: {
            brand: "HP",
            model: "840 G6",
            releaseYear: 2018,
        },
        smartWatch: {
            brand: "Apple",
            model: "Series 6",
            display: "OLED",
        }
    }

    const JrDeveloper: Developer<SamsungWatch, YamahaBike> = {
        name: "Alice",
        computer: {
            brand: "Acer",
            model: "Aspire",
            releaseYear: 2019,
        },
        smartWatch: {
            brand: "Samsung",
            model: "SM2",
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            brand: "Yamaha",
            model: "V4",
            color: "Black",
            price: 500000,
        }
    }
}