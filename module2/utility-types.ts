{
    

    type User = {
        name: string;
        age: number;
        email?: string;
        salary: number;
        phone: string
    }

// pick utility 
    type Name = Pick<User, 'name'>
    type NameAge = Pick<User, 'name' | 'age'>
// omit utility - bad deya 
    type Contact = Omit<User, 'name' | 'age'>
        
    // required - make all type required
    type RequiredType = Required<User>

    // partial - make all type optional 
    type OptionalType = Partial<User>

    // readonly 
    type ReadOnlyType = Readonly<User>

    // reacord

    // type MyObj = {
    //     name: string;
    //     age: number
    // }

    type MyObj = Record<string, unknown>

    const myObj : MyObj = {
        a: 'aa',
        b: 'bb'
    }









}