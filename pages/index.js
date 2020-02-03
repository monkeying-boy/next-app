import Api from '@/axios';
import Head from 'next/head'
const App = (props)=>{

  return(
    <div>
      <Head>
        <title>首页标题</title>
      </Head>
      <p>这是首页</p>
    </div>
  )
}
App.getInitialProps = async ()=>{
      let [err, { data=[] } ] = await Api.get('/api/com/article');
      if(err){
        console.log("请求错误");
      }
    return {list:data};
}

export default App;