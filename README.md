# send-coin
ローカルのネットワーク上で送金を行うことができるアプリ

## To run the app
1. ### run the dapp server
    1. #### start truffle
    ```bash
    cd <root>/server
    npm start
    ```
    2. #### compile and deploy (called migrate in truffle)
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
npm start
```
