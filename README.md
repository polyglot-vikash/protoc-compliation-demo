# protoc-compliation-demo
Demo project showing usage of protocol buffers (protoc compiler) in JavaScript and Java

Requirement: 
Protoc compiler

```
Commands:

JavaScript 
  protoc --js_out=import_style=commonjs,binary:. .\messages.proto

Java
   protoc --java_out=. .\customer.proto

Generated files:
messages_pb.js
Com.vk.protobuf.Bar.java

```
