# Package

**Server**
  - bcryptjs: used to hash passwords before we store them in our database
  - body-parser: used to parse incoming request bodies in a middleware
  - concurrently: allows us to run our backend and frontend concurrently and on different ports
  - express: sits on top of Node to make the routing, request handling, and responding easier to write
  - is-empty: global function that will come in handy when we use validator
  - jsonwebtoken: used for authorization
  - mongoose: used to interact with MongoDB
  - passport: used to authenticate requests, which it does through an extensible set of plugins known as strategies
  - passport-jwt: passport strategy for authenticating with a JSON Web Token (JWT); lets you authenticate endpoints using a JWT
  - validator: used to validate inputs (e.g. check for valid email format, confirming passwords match)

**Client**
  - axios: promise based HTTP client for making requests to our backend
  - classnames: used for conditional classes in our JSX
  - jwt-decode: used to decode our jwt so we can get user data from it
  - react-redux: allows us to use Redux with React
  - react-router-dom: used for routing purposes
  - redux: used to manage state between components (can be used with React or any other view library)
  - redux-thunk: middleware for Redux that allows us to directly access the dispatch method to make asynchronous calls from our actions


# Json web token
 - Jwt định dạng bằng json

**Token: Header.Payload.Signature**

- Header

  ```json
  {
      "typ": "JWT",
      "alg": "HS256"
  }
  ```
  “typ” (type) chỉ ra rằng đối tượng là một JWT
  “alg” (algorithm) xác định thuật toán mã hóa cho chuỗi là HS256

------

- Payload
Phần payload sẽ chứa các thông tin mình muốn đặt trong chuỗi
Token như username , userId , author ,
  ```json
  {
    "user_name": "admin",
    "user_id": "1513717410",
    "authorities": "ADMIN_USER",
    "jti": "474cb37f-2c9c-44e4-8f5c-1ea5e4cc4d18"
  }
  ```

- Signature
Phần chử ký này sẽ được tạo ra bằng cách mã hóa phần header , payload kèm theo một chuỗi secret (khóa bí mật). vi du

  ```js
  data = base64urlEncode( header ) + "." + base64urlEncode( payload )
  signature = Hash( data, secret );
  ```

  base64UrlEncoder : thuật toán mã hóa header và payload
  Hash: ma hoa bang thuat toan HS256

**Authentication**: Đây là trường hợp phổ biến nhất thường sử dụng JWT. Khi người dùng đã đăng nhập vào hệ thống thì những request tiếp theo từ phía người dùng sẽ chứa thêm mã JWT. Điều này cho phép người dùng được cấp quyền truy cập vào các url, service, và resource mà mã Token đó cho phép. Phương pháp này không bị ảnh hưởng bởi Cross-Origin Resource Sharing (CORS) do nó không sử dụng cookie.

**Trao đổi thông tin**: JSON Web Token là 1 cách thức khá hay để truyền thông tin an toàn giữa các thành viên với nhau, nhờ vào phần signature của nó. Phía người nhận có thể biết được người gửi là ai thông qua phần signature. Và chữ ký được tạo ra bằng việc kết hợp cả phần header, payload lại nên thông qua đó ta có thể xác nhận được chữ ký có bị giả mạo hay không.
