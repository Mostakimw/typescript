{


    interface GenericInterface<T>{
        name: string;
        age: number;
        pc: {
            name: string;
            model: number
        };
        mobile: T
    }
    
    type Mobile = {
        name: "realme",
        model: 2022,
    }
    const user1: GenericInterface<Mobile> = {
        name: 'Mostakim',
        age: 50,
        pc:{
            name: 'Asus',
            model: 2018
        },
        mobile: {
            name: "realme",
            model: 2022,
        }
    }
}