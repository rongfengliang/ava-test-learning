import test from "ava"
import React from "react"
import render  from "react-test-renderer"
import LoginForm  from   "../libs/userlogin"
test("demouserlogin",t=>{
     t.log("userlogin component test is startings")
     const tree = render.create(<LoginForm/>).toJSON();
     t.snapshot(tree)
})

