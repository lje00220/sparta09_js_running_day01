// ## 6. 장바구니 뒤바뀜 문제

// 아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.

// B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.

function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

const userBCart = userACart;
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

// 1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
// userACart.items에서 키보드는 25000, 마우스는 15000이고 userBCart도 이와 똑같이 변화하였을 것이다.

// 2.	1번의 결과에 대한 이유를 설명해보세요.
// const userBCart = userACart에서 객체의 참조값을 복사해왔기 때문에 실질적으로 두 객체는 같은 참조값을 가리키기 때문이다.
// 따라서, 하나가 변화하면 다른 하나도 같이 변화하게 된다.

// 3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
// const userBCart = userACart; 부분을 수정해야 한다.
// userBCart라는 새로운 객체를 만들고 반복문을 통해서 userACart에 있는 값을 하나씩 옮겨오면 독립적으로 작동할 수 있다.
