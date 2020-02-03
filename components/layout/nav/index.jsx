import React,{ useState, useEffect } from 'react';
import "./index.scss";
import cs from 'classnames';
import Api from '@/apis/article.js';
import { withRouter, NavLink } from 'react-router-dom';

function Nav(props) {
	let list = [
		{ title:'留言板',link:'/comment',icon:'home_icon' },
		{ title:'首页',link:'/',icon:'home_icon' }
	]
	// 滚动
	let bindScroll = () =>{
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    	setScrollTop(scrollTop);
	}
	const [scrollTop, setScrollTop] = useState(0);
	const [navList, setNavList] = useState(list);

	// 获取分类
	let getCategory = ()=>{
		Api.getCategory().then( ({data}) =>{
			let nav = data.map( item =>{
				switch(item.title){
					case "随笔": return{
						title: item.title,
						link: '/article/informalEssay',
						icon:'home_icon'
					};
					case '转载': return{
						title: item.title,
						link: '/article/reprint',
						icon:'home_icon'
					}
				}
			})
			nav.push({ title:'留言板',link:'/comment',icon:'home_icon' });
			nav.unshift({ title:'首页',link:'/',icon:'home_icon' });
			setNavList(nav);
		})
	}

	useEffect( () => {
		bindScroll();
		window.addEventListener('scroll', bindScroll)
		// getCategory();

		return ()=>{
			window.removeEventListener('scroll', bindScroll);
		}

	},[])

	return (
		<nav className={ cs( style.nav_box,'flex_between', { [ style.isTop ]: scrollTop},{ [style.hsla]:props.location.pathname!=='/' } ) }>
				<div>
					{
						// <img className={style.logo} src="https://www.yanceyleo.com/static/media/yancey-official-blog-logo.48b2cc1f.png" loading="lazy" alt=""/>

					}
				</div>
				<div>
					<ul className={ style.menu }>
						{
							navList.map(( item, index) => (
								<li>
									<i className={item.icon}></i>
									<NavLink key={index} to={item.link} className="Ubuntu-font" >{item.title}</NavLink>
								</li>
							))
						}
					</ul>
				</div>
		</nav>
	);
}

export default withRouter(Nav);