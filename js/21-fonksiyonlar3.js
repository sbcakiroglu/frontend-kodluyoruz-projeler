function hello(firstName) {
    console.log('Merhaba ${firstName}')
}
hello("javascript")

const helloFuncV1 = (firstName) => {console.log('Merhaba ${firstName}')}
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName => console.log('Merhaba ${firstName}')
helloFuncV2("helloFuncV2")

const helloFuncV3 = (firstName,lastName) 
=> console.log('Merhaba ${firstName} ${lastName}')
helloFuncV3("helloFuncV3", "last name info")