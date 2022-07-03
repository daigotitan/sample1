// 要素を定義
const e_nav = document.querySelector('nav');
const e_button = document.querySelector('header p.button');
const a_links = document.querySelectorAll('a[href^="#"]');

// ボタンを押したらナビの表示を切り替える
e_button.addEventListener('click', () => {
  displayNavi();
},false);

// ナビの表示を切り替える関数
const displayNavi = () => {
  if(e_button.classList.contains('open')){
    e_button.classList.remove('open');
    e_nav.classList.remove('open');
  }
  else{
    e_button.classList.add('open');
    e_nav.classList.add('open');
  }
}

// <a>要素の配列内で繰り返す
a_links.forEach((value) => {
  // 配列内の各要素を value としてクリックされた時にリンク先にスクロールさせる
  value.addEventListener('click', (e) => {
    // デフォルトの<a>のリンクをキャンセルさせる
    e.preventDefault();
    // 各a要素のリンク先を取得
    let href = value.getAttribute('href');
    // リンク先の要素（コンテンツ）を取得
    let e_target = document.getElementById(href.replace('#', ''));
    // ブラウザからの高さを取得
    const rect = e_target.getBoundingClientRect().top;
    // 現在のスクロール量を取得
    const offset = window.pageYOffset;
    // 固定ヘッダー分の高さ
    const gap = 50;
    //最終的な位置を割り出す
    const target = rect + offset - gap;
    // スムースにスクロール
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
    // ボタンとナビのactiveを解除
    e_button.classList.remove('open');
    e_nav.classList.remove('open');
  });
});

