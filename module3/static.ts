{
    //
    class Counter {
        static count: number = 0

        static increment() {
            return Counter.count = Counter.count + 1;
        }
    }

    console.log(Counter.increment());
}