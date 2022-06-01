# send-coin
ローカルのネットワーク上で送金を行うことができるアプリ

## To run the app
1. ### run the dapp server
    1. #### install dependencies
    ```bash
    cd <root>/server
    npm install
    ```
    3. #### start truffle
    ```bash
    npm start
    ```
    3. #### compile and deploy (called migrate in truffle)
    compile the dapp
    ```
    # in the truffle interactive console
    compile
    ```
    migrate the dapp
    ```
    # in the truffle interactive console
    migrate
    ```
2. ### run the client server (with react)
start client server
```bash
cd <root>/client
npm install
npm start
```
