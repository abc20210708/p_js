var articles = {

        totalCount: 3670,//총 게시물 수
        admin: '김말똥', //관리자 이름
        pageNumber: 11, //페이지 넘버
        articleList: [ //게시물 데이터,순차적,배열

            {
                bno: 5, //글번호
                title: '뽀로로랜드',
                write: '김뽀로로',
                content: '안녕',
                viewCount: 0,
                regDate:'2021-08-11' 
            },

            {
                bno: 4, //글번호
                title: '메롱메롱',
                write: '박뽀로로',
                content: '메롱',
                viewCount: 5,
                regDate:'2021-08-11'
            },

            { 
                bno: 3, //글번호
                title: '안녕안녕',
                write: '김철수',
                content: '잘있어',
                viewCount: 0,
                regDate:'2021-08-11'}
            
        ]
};

console.log(articles.admin);

console.log('============================');
console.log(articles.articleList[1]);
console.log(articles.articleList[2].title);
console.log(articles.articleList[0]['write']);
console.log(articles.articleList[0].write);
console.log(articles.articleList[1].bno);
