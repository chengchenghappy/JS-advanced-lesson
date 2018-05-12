// demo04
//字符类 []
console.log("absxsdfe123Ab".replace(/[abd]/,"X"));
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X"));
// Xbsxsdfe123Ab
// XXsxsXfe123AX
// XXsxsXfe123XX

// 字符类 的取反 [^]
console.log("absxsdfe123Ab".replace(/[^abd]/,"X"));
console.log("absxsdfe123Ab".replace(/[^abd]/g,"X"));
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"X"));
// abXxsdfe123Ab
// abXXXdXXXXXXb
// abXXXdXXXXXAb

//范围类
console.log("12345667".replace(/[3-9]/gi,"X"));
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X"));
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X"));//如果单独替换，则需要分组，见后续
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X"));
// 12XXXXXX
// XXsxsXXXXXXXX
// absxsdfX23Ab
// absxsdfX2Xb

// —用最后加上一个就可以匹配
console.log("2017-10-23".replace(/[0-9]/g,"X"));
console.log("2017-10-23".replace(/[0-9-]/g,"X"));
// XXXX-XX-XX
// XXXXXXXXXX

/ab[0-9][^\r\n]/ //等效于/[ab\d.]/
console.log("@abc@123@".replace(/@./g,"Q"));
console.log("@abc@123@".replace(/.@/g,"Q"));
// QbcQ23@
// @abQ12Q

//关于边界 ^ $ \b \B
console.log("This is a Boy is".replace(/is/g,0));
console.log("This is a Boy is".replace(/^is/g,0));
console.log("This is a Boy is".replace(/is$/g,0));
console.log("This is a Boy is".replace(/is\b/g,0));
console.log("This is a Boy is".replace(/is\B/g,0));
console.log("This is a Boy is".replace(/\bis/g,0));
console.log("This is a Boy is".replace(/\Bis/g,0));
// Th0 0 a Boy 0
// This is a Boy is
// This is a Boy 0
// Th0 0 a Boy 0
// This is a Boy is
// This 0 a Boy 0
// Th0 is a Boy is

//量词 注意*在这里是量词，不是充当通配符，充当通配符的是 .
//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));
// 0Bb0b_0aBbb0ba

//+ 出现1次或多次（至少出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));
// 0BbAb_0BbbAba

//* 出现0次或多次（任意次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0));
// 0Bb0b_0Bbb0ba

//{n} 出现n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g,0));
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g,0));
// 0BbAb_0aBbbAba
// AaBbAb_0BbbAba

//{n,m} 出现n到m次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g,0));
// 0BbAb_0BbbAba

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,}/g,0));
//console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,4}/g,0));
//  AaBbAb_0BbbAba000

//注意：0到n次的写法{0,n}而不是{,n}