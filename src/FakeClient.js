export class FakeClient {

    getData() {
        return [1, 2, 3];
    }
}

const client = new FakeClient();
export default client;