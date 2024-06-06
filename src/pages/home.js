/* eslint-disable jsx-a11y/anchor-is-valid */


import React from "react";

class Home extends React.Component{
    render(){
        return(
        <div>
<header id="insHeaderPage">
	
	<div id="headerPage">
		<div class="container">
			<div class="header-page__wrapper">
				<div class="header-logo">
					<p>
						<a href="/"  > 
							<picture>
								<source media="(max-width: 375px)" srcset="//theme.hstatic.net/200000420363/1000988446/14/logo_medium.png?v=2262"/>
								<img src="https://theme.hstatic.net/200000420363/1000988446/14/logo.png?v=2262" alt="tinhocngoisao.com" width="500" height="288" />
							</picture>
						</a>
					</p>
					<h1 class="hide">
						tinhocngoisao.com
					</h1>
				</div>
				<div class="header-search">
					<div class="frmSearch">
						<form id="searchFRM" action="/search">
							<input type="hidden" name="type" value="product" />
							<input required autocomplete="off" type="text" name="q" id="inputSearchAuto" placeholder="Bạn tìm gì…" />
							<button type="submit" class="insButton btnSearch" title="Tìm kiếm">
								<i class="glyphicon glyphicon-search"></i> Tìm kiếm
							</button>
						</form>
						<div id="ajaxSearchResults" class="ajaxSearchAuto" >
							<div class="resultsContent">

							</div>
						</div>
					</div>
				</div>
				<div class="header-action">
					<div class="item header-action__account hidden-sm hidden-xs checkaccount">
						<div class="icon">
							<a href="/account"  >
								<i class="fa fa-user" aria-hidden="true"></i>
							</a>
						</div>
						<div class="text">
							<div class="check_account">
								<a href="/account"  >
									<span></span>	

									<span></span>
								</a>	
							</div>
						</div>
						
						<div class="header-account__dropdown">
							<ul class="list">
								<li>
									<a href="#" onclick="return false;"   class="btn btn-login">Đăng nhập</a>
								</li>
								<li>
									<a href="#" onclick="return false;"   class="btn btn-login">Tạo tài khoản</a>
								</li>
								<li>
									<a href="#" onclick="return false;" id="btn-facebook-login" class="btn btn-social 111">
										<img class="lazyload w-100" width="32" height="32"
												 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
												 data-src="https://file.hstatic.net/200000420363/file/facebook_1c63f005194e45a28b42a353dc674d83.png" alt="Đăng nhập bằng Facebook" />
										<strong>Đăng nhập bằng Facebook</strong>
									</a>
								</li>
								<li>
									<a href="#" onclick="return false;" id="btn-google-login" class="btn btn-social gg">
										<img class="lazyload w-100" width="32" height="32"
												 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
												 data-src="https://file.hstatic.net/200000420363/file/google_8cfc695994154c7d8decf9d74a69dbb0.png" alt="Đăng nhập bằng Google" />
										<strong>Đăng nhập bằng Google</strong>
									</a>
								</li>
							</ul>
						</div>
						
					</div>
					<div class="item header-action__cart">
						<div class="icon">
							<a href="/cart"  >
								<img width="30" height="26" class="lazyload" data-src="https://file.hstatic.net/200000420363/file/cart_57531e43108d48c6ab3281bbbc813beb.png" alt="Giỏ hàng" />
								<span class="cart-count">0</span>
							</a>
						</div>
						<div class="text">
							<a href="/cart"  >
								<span><b>Giỏ hàng</b></span>
							</a>
						</div>
					</div>
					<div class="item header-action__toggle hidden-md hidden-lg">
							<span class="line"></span>
							<span class="line"></span>
							<span class="line"></span>
							<span class="text">MENU</span>
					</div>
				</div>
			</div>
			<div class="header-page__nav hidden-sm hidden-xs">
				<div class="nav-sidebar">
					<div class="nav-sidebar__head">
						<i class="fa fa-bars"></i>
						<span>DANH MỤC SẢN PHẨM</span>
					</div>
					<div class="nav-sidebar__dropdown">
						<ul class="nav-sidebar__list list 2">
							
							
							<li class="li_child">
								<a href="https://tinhocngoisao.com/pages/tong-hop-khuyen-mai"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu1.png?v=129" alt="Tổng Hợp Khuyến Mãi" />
									<span>Tổng Hợp Khuyến Mãi</span>
									
								</a>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/linh-kien-moi"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu2.png?v=139" alt="Linh Kiện Mới" />
									<span>Linh Kiện Mới</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="/collections/cpu-bo-vi-xu-ly" class="head"  ><span>CPU - Bộ vi xử lý</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/cpu-the-he-14"><span class="vivaa">Intel thế hệ 14</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/cpu-the-he-13"><span class="vivaa">Intel thế hệ 13</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/cpu-the-he-12"><span class="vivaa">Intel thế hệ 12</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/cpu-the-he-11"><span class="vivaa">Intel thế hệ 11</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/cpu-the-he-10"><span class="vivaa">Intel thế hệ 10</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/amd-ryzen-8000-series"><span class="vivaa">AMD 8000 Series</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/amd-7000-series"><span class="vivaa">AMD 7000 Series</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/amd-5000-series"><span class="vivaa">AMD 5000 Series</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/amd-4000-series"><span class="vivaa">AMD 4000 Series</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/amd-3000-series"><span class="vivaa">AMD 3000 Series</span></a>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/cpu-tray"><span class="vivaa">CPU Tray - No Box</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/core-i3-tray"><span>Intel Core i3</span></a>
															</li>
															
															<li class="">
																<a href="/collections/core-i5-tray"><span>Intel Core i5</span></a>
															</li>
															
															<li class="">
																<a href="/collections/core-i7-tray"><span>Intel Core i7</span></a>
															</li>
															
															<li class="">
																<a href="/collections/core-i9-tray"><span>Intel Core i9</span></a>
															</li>
															
															<li class="">
																<a href="/collections/cpu-amd-tray"><span>CPU AMD Tray</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/cpu-intel"><span class="vivaa">CPU Intel</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/intel-core-i3"><span>Intel Core i3</span></a>
															</li>
															
															<li class="">
																<a href="/collections/intel-core-i5"><span>Intel Core i5</span></a>
															</li>
															
															<li class="">
																<a href="/collections/intel-core-i7"><span>Intel Core i7</span></a>
															</li>
															
															<li class="">
																<a href="/collections/intel-core-i9"><span>Intel Core i9</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/cpu-amd-moi"><span class="vivaa">CPU AMD</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/amd-ryzen-3"><span>AMD Ryzen 3</span></a>
															</li>
															
															<li class="">
																<a href="/collections/amd-ryzen-5"><span>AMD Ryzen 5</span></a>
															</li>
															
															<li class="">
																<a href="/collections/amd-ryzen-7"><span>AMD Ryzen 7</span></a>
															</li>
															
															<li class="">
																<a href="/collections/amd-ryzen-9"><span>AMD Ryzen 9</span></a>
															</li>
															
														</ul>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/bo-mach-chu" class="head"  ><span>Mainboard - Bo mạch chủ</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime arrowline">
														<a href="/collections/main-intel"><span class="vivaa">Mainboard Intel</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-Z790"><span>Intel Z790</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-Z690"><span>Intel Z690</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-B660"><span>Intel Z590</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-Z490"><span>Intel Z490</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-Z370"><span>Intel Z370</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-B760"><span>Intel B760</span></a>
															</li>
															
															<li class="">
																<a href="/collections/main-intel/Main-Intel-B660"><span>Intel B660</span></a>
															</li>
															
															<li class="">
																<a href="/collections/main-intel/Main-Intel-B560"><span>Intel B560</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-B460"><span>Intel B460</span></a>
															</li>
															
															<li class="">
																<a href="/collections/main-intel/Main-Intel-H610"><span>Intel H610</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-H510"><span>Intel H510</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-H470"><span>Intel H470</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-H410"><span>Intel H410</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-H310"><span>Intel H310</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-H110"><span>Intel H110</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-H81"><span>Intel H81</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-Intel-X299"><span>Intel X299</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/main-amd"><span class="vivaa">Mainboard AMD</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-AMD-A520"><span>AMD A520</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-AMD-A320"><span>AMD A320</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-AMD-X670"><span>AMD X670</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-AMD-X570"><span>AMD X570</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-AMD-X399"><span>AMD X399</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-AMD-B650"><span>AMD B650</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-AMD-B550"><span>AMD B550</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-AMD-B450"><span>AMD B450</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Main-AMD-TRX40"><span>AMD TRX40</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/bo-mach-chu"><span class="vivaa">Mainboard theo hãng</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/bo-mach-chu/asus"><span>Main Asus</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Gigabyte"><span>Main Gigabyte</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/MSI"><span>Main MSI</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Asrock"><span>Main Asrock</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/bo-mach-chu"><span class="vivaa">Mainboard theo socket</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/bo-mach-chu/Intel-LGA-1700"><span>Intel 1700 (Gen12 - 13)</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Intel-LGA-1200"><span>Intel 1200 (Gen10 - 11)</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Intel-LGA-1151"><span>Intel 1151 - 1151 v2</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/Intel-LGA-1150"><span>Intel 1150</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/AMD-AM5"><span>AMD AM5</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/AMD-AM4"><span>AMD AM4</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/bo-mach-chu"><span class="vivaa">Mainboard theo kích thước</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/bo-mach-chu/ATX"><span>ATX</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/MATX"><span>m-ATX</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/ITX"><span>ITX</span></a>
															</li>
															
															<li class="">
																<a href="/collections/bo-mach-chu/EATX"><span>E-ATX</span></a>
															</li>
															
														</ul>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/o-cung-pc" class="head"  ><span>SSD - HDD</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/o-cung-ssd/120GB---128GB"><span class="vivaa">SSD 120G - 128GB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/o-cung-ssd/240GB---256GB"><span class="vivaa">SSD 240G - 256GB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/o-cung-ssd/480GB---512GB"><span class="vivaa">SSD 480GB - 512GB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/o-cung-ssd/1TB---2TB---4TB"><span class="vivaa">SSD 1TB - 2TB - 4TB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/o-cung-ssd/M2-NVMe-Gen3x4"><span class="vivaa">M.2 NVMe Gen 3</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/o-cung-ssd/M2-NVMe-Gen4x4"><span class="vivaa">M.2 NVMe Gen 4</span></a>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/o-cung-pc"><span class="vivaa">Ổ cứng theo hãng</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/o-cung-pc/Kingston"><span>Kingston</span></a>
															</li>
															
															<li class="">
																<a href="/collections/o-cung-pc/Western-Digital"><span>Western Digital</span></a>
															</li>
															
															<li class="">
																<a href="/collections/o-cung-pc/Samsung"><span>Samsung</span></a>
															</li>
															
															<li class="">
																<a href="/collections/o-cung-pc/Corsair"><span>Corsair</span></a>
															</li>
															
															<li class="">
																<a href="/collections/o-cung-pc/Gigabyte"><span>Gigabyte</span></a>
															</li>
															
															<li class="">
																<a href="/collections/o-cung-pc/Adata"><span>Adata</span></a>
															</li>
															
															<li class="">
																<a href="/collections/o-cung-pc/PNY"><span>PNY</span></a>
															</li>
															
															<li class="">
																<a href="/collections/o-cung-pc/Colorful"><span>Colorful</span></a>
															</li>
															
															<li class="">
																<a href="/collections/o-cung-pc/Patriot"><span>Patriot</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/o-cung-hdd/1TB---2TB---4TB"><span class="vivaa">HDD 1TB - 2TB - 4TB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/o-cung-hdd/Trên-4-TB"><span class="vivaa">HDD từ 4TB trở lên</span></a>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/phu-kien-ssd"><span class="vivaa">Phụ kiện SSD</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/caddy-bay-tray-ssd"><span>Caddy Bay</span></a>
															</li>
															
															<li class="">
																<a href="/collections/phu-kien-ssd/Thanh-Tản-Nhiệt-SSD"><span>Thanh Tản Nhiệt</span></a>
															</li>
															
														</ul>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/case-thung-may" class="head"  ><span>Case - Thùng máy</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime arrowline">
														<a href="/collections/case-thung-may"><span class="vivaa">Case theo hãng</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/case-thung-may/Asus"><span>Case Asus</span></a>
															</li>
															
															<li class="">
																<a href="/collections/case-msi"><span>Case MSI</span></a>
															</li>
															
															<li class="">
																<a href="/collections/case-nzxt"><span>Case NZXT</span></a>
															</li>
															
															<li class="">
																<a href="/collections/case-cougar"><span>Case Cougar</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/case-thung-may"><span class="vivaa">Case theo nhu cầu</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/case-gaming"><span>Case Gaming</span></a>
															</li>
															
															<li class="">
																<a href="/collections/case-van-phong"><span>Case văn phòng</span></a>
															</li>
															
															<li class="">
																<a href="/collections/case-ho-ca"><span>Case hồ cá</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/case-thung-may"><span class="vivaa">Case theo kích cỡ</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/case-thung-may/ATX-Mid-Tower"><span>ATX Mid Tower</span></a>
															</li>
															
															<li class="">
																<a href="/collections/case-thung-may/ATX-Full-Tower"><span>ATX Full Tower</span></a>
															</li>
															
															<li class="">
																<a href="/collections/case-thung-may/ATX-Super-Tower"><span>ATX Super Tower</span></a>
															</li>
															
														</ul>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/psu-nguon-may-tinh" class="head"  ><span>PSU - Nguồn máy tính</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime arrowline">
														<a href="/collections/psu-nguon-may-tinh"><span class="vivaa">Nguồn theo hãng</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/psu-nguon-may-tinh/Asus"><span>Nguồn Asus</span></a>
															</li>
															
															<li class="">
																<a href="/collections/psu-nguon-may-tinh/COOLER-MASTER"><span>Nguồn Cooler Master</span></a>
															</li>
															
															<li class="">
																<a href="/collections/psu-nguon-may-tinh/Corsair"><span>Nguồn Corsair</span></a>
															</li>
															
															<li class="">
																<a href="/collections/psu-nguon-may-tinh/Jetek"><span>Nguồn Jetek</span></a>
															</li>
															
															<li class="">
																<a href="/collections/psu-nguon-may-tinh/Xigmatek"><span>Nguồn Xigmatek</span></a>
															</li>
															
															<li class="">
																<a href="/collections/psu-nguon-may-tinh/Gigabyte"><span>Nguồn Gigabyte</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/nguon-400w-den-550w"><span class="vivaa">Nguồn 400W đến 550W</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/nguon-550w-den-650w"><span class="vivaa">Nguồn 550W đến 650W</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/nguon-650w-den-800w"><span class="vivaa">Nguồn 650W đến 800W</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/nguon-800w-den-1000w"><span class="vivaa">Nguồn 800W đến 1000W</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/nguon-tren-1000w"><span class="vivaa">Nguồn trên 1000W</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/nguon-80-plus-bronze"><span class="vivaa">Nguồn 80 Plus Bronze</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/nguon-80-plus-gold"><span class="vivaa">Nguồn 80 Plus Gold</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/nguon-80-plus-platinum"><span class="vivaa">Nguồn 80 Plus Platinum</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/bo-nho-ram" class="head"  ><span>Bộ nhớ RAM</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/ram-ddr5"><span class="vivaa">Ram DDR5</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ram-ddr4-pc/8gb"><span class="vivaa">Ram DDR4 8GB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ram-ddr4-pc/16gb-32gb"><span class="vivaa">Ram DDR4 16GB - 32GB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ram-led"><span class="vivaa">Ram LED RGB</span></a>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="https://tinhocngoisao.com/collections/bo-nho-ram"><span class="vivaa">Ram theo hãng</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/Kingston"><span>Ram Kingston</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/Corsair"><span>Ram Corsair</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/Gskill"><span>Ram Gskill</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/Adata"><span>Ram Adata</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="https://tinhocngoisao.com/collections/bo-nho-ram"><span class="vivaa">RAM theo dung lượng</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/4GBx1"><span>4GB x 1</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/8GBx1"><span>8GB x1</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/8GBx2"><span>8GB x2</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/16GBx1"><span>16GB x1</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/16GBx2"><span>16GB x2</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/32GBx1"><span>32GB x1</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/32GBx2"><span>32GB x2</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/bo-nho-ram"><span class="vivaa">Ram theo bus</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/DDR3-1600-MHz"><span>DDR3 - 1600</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/DDR4-2400-MHz"><span>DDR4 - 2400</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/DDR4-2666-MHz"><span>DDR4 - 2666</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/DDR4-3200-MHz"><span>DDR4 - 3200</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/DDR4-3600-MHz"><span>DDR4 - 3600</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/DDR5-4800-Mhz"><span>DDR5 - 4800</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/DDR5-5200-MHz"><span>DDR5 - 5200</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/DDR5-5600-Mhz"><span>DDR5 - 5600</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/bo-nho-ram/DDR5-6000-Mhz"><span>DDR5 - 6000</span></a>
															</li>
															
														</ul>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/card-man-hinh" class="head"  ><span>VGA - Card màn hình</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime arrowline">
														<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-nvidia"><span class="vivaa">VGA NVIDIA GeForce</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rtx-4090"><span>RTX 4090</span></a>
															</li>
															
															<li class="">
																<a href="/collections/vga-rtx-4080-super"><span>RTX 4080 Super</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rtx-4080"><span>RTX 4080</span></a>
															</li>
															
															<li class="">
																<a href="/collections/vga-rtx-4070-super"><span>RTX 4070 Super</span></a>
															</li>
															
															<li class="">
																<a href="/collections/card-man-hinh-vga-rtx-4070-ti"><span>RTX 4070 Ti</span></a>
															</li>
															
															<li class="">
																<a href="/collections/card-man-hinh-vga-rtx-4070"><span>RTX 4070</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rtx-3090-ti"><span>RTX 3090 Ti</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rtx-3090"><span>RTX 3090</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rtx-3080-ti"><span>RTX 3080 Ti</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rtx-3080"><span>RTX 3080</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rtx-3070-ti"><span>RTX 3070 Ti</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rtx-3070"><span>RTX 3070</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rtx-3060-ti"><span>RTX 3060 Ti</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rtx-3060"><span>RTX 3060</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rtx-3050"><span>RTX 3050</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rtx-2060-super"><span>RTX 2060 Super</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rtx-2060"><span>RTX 2060 6GB - 2060 12GB</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-gtx-16-series"><span>GTX 1660S - 1660Ti - 1660</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-gtx-16-series"><span>GTX 1650S - 1650 - 1050Ti</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-gt-series"><span>GT 1030 - 730 - 710</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-amd"><span class="vivaa">VGA AMD</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rx-6900-xt"><span>RX 6900 XT</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rx-6800-xt"><span>RX 6800 XT</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rx-6700-xt"><span>RX 6700 XT</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rx-6600-xt"><span>RX 6600 XT</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rx-6600"><span>RX 6600</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-rx-6500-xt"><span>RX 6500 XT</span></a>
															</li>
															
															<li class="">
																<a href="/collections/vga-amd-rx-5600"><span>RX 5600</span></a>
															</li>
															
															<li class="">
																<a href="/collections/amd-rx-560"><span>RX 560</span></a>
															</li>
															
															<li class="">
																<a href="/collections/card-man-hinh-vga-amd-rx-550"><span>RX 550</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/card-man-hinh-vga-nvidia-quadro"><span class="vivaa">VGA NVIDIA Quadro</span></a>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/card-man-hinh"><span class="vivaa">VGA theo hãng</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/card-man-hinh-vga-asus"><span>VGA Asus</span></a>
															</li>
															
															<li class="">
																<a href="/collections/card-man-hinh-vga-gigabyte"><span>VGA Gigabyte</span></a>
															</li>
															
															<li class="">
																<a href="/collections/card-man-hinh-vga-msi"><span>VGA MSI</span></a>
															</li>
															
															<li class="">
																<a href="/collections/card-man-hinh-vga-zotac"><span>VGA Zotac</span></a>
															</li>
															
															<li class="">
																<a href="/collections/card-man-hinh-vga-colorful"><span>VGA Colorful</span></a>
															</li>
															
															<li class="">
																<a href="/collections/card-man-hinh-vga-manli"><span>VGA Manli</span></a>
															</li>
															
															<li class="">
																<a href="/collections/card-man-hinh-vga-palit"><span>VGA Palit</span></a>
															</li>
															
														</ul>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/tan-nhiet-pc" class="head"  ><span>Tản nhiệt PC</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime arrowline">
														<a href="/collections/tan-nhiet-pc"><span class="vivaa">Tản nhiệt theo hãng</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/tan-nhiet-pc/Asus"><span>Asus</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/tan-nhiet-pc/NZXT"><span>NZXT</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/tan-nhiet-pc/Coolmoon"><span>Coolmoon</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/tan-nhiet-pc/Cooler-Master"><span>Cooler Master</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/tan-nhiet-pc/ID-Cooling"><span>ID Cooling</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tan-nhiet-khi"><span class="vivaa">Tản nhiệt khí</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tan-nhiet-aio/240mm"><span class="vivaa">Tản AIO 240</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tan-nhiet-aio/280mm"><span class="vivaa">Tản AIO 280</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tan-nhiet-aio/360mm"><span class="vivaa">Tản AIO 360</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tan-nhiet-pc/RGB"><span class="vivaa">Fan Led RGB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/keo-tan-nhiet"><span class="vivaa">Keo tản nhiệt</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/fan-case"><span class="vivaa">Fan Case</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="//theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/linh-kien-cu"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu3.png?v=129" alt="Linh Kiện Cũ" />
									<span>Linh Kiện Cũ</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="/collections/cpu-tray" class="head"  ><span>CPU - Bộ vi xử lý</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime arrowline">
														<a href="https://tinhocngoisao.com/collections/cpu-intel-tray"><span class="vivaa">CPU Intel Tray - Cũ</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/core-i3-tray"><span>Core i3</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/core-i5-tray"><span>Core i5</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/core-i7-tray"><span>Core i7</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/core-i9-tray"><span>Core i9</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/cpu-amd-tray"><span class="vivaa">CPU AMD Tray - Cũ</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/ryzen-3-tray"><span>Ryzen 3</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/ryzen-5-tray"><span>Ryzen 5</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/ryzen-7-tray"><span>Ryzen 7</span></a>
															</li>
															
														</ul>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/bo-mach-chu-cu" class="head"  ><span>Mainboard - Bo mạch chủ</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/main-intel-cu"><span class="vivaa">Main Intel</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/main-amd-cu"><span class="vivaa">Main AMD</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/main-dong-b-cu"><span class="vivaa">Main dòng B</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/main-dong-h-cu"><span class="vivaa">Main dòng H</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/main-dong-z-cu"><span class="vivaa">Main dòng Z</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/bo-nho-ram-cu" class="head"  ><span>Bộ nhớ ram</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/ram-ddr3-cu"><span class="vivaa">Ram DDR3</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/ram-ddr4-cu"><span class="vivaa">Ram DDR4</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/card-man-hinh-cu" class="head"  ><span>VGA - Card màn hình</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/vga-nvidia-cu"><span class="vivaa">VGA NVIDIA</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/vga-amd-cu"><span class="vivaa">VGA AMD</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/nguon-cu" class="head"  ><span>PSU - Nguồn máy tính</span>
													
												</a>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/man-hinh-may-tinh-cu" class="head"  ><span>Màn hình máy tính</span>
													
												</a>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="//theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/o-cung-pc"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu4.png?v=129" alt="SSD - HDD - USB" />
									<span>SSD - HDD - USB</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="/collections/o-cung-pc" class="head"  ><span>Chọn theo hãng</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-pc/Colorful"><span class="vivaa">Colorful</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-pc/Western-Digital"><span class="vivaa">Western Digital</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-pc/Lexar"><span class="vivaa">Lexar</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-pc/Corsair"><span class="vivaa">Corsair</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-pc/Kingston"><span class="vivaa">Kingston</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-pc/Gigabyte"><span class="vivaa">Gigabyte</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-pc/SSTC"><span class="vivaa">SSTC</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-pc/Adata"><span class="vivaa">Adata</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/o-cung-ssd-kioxia"><span class="vivaa">Kioxia</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/o-cung-ssd" class="head"  ><span>SSD</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-ssd/M2-NVMe"><span class="vivaa">M2 NVMe</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-ssd/SATA-III"><span class="vivaa">SATA III</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-ssd/PCIe-Gen-4"><span class="vivaa">PCIe Gen 4</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-ssd/PCIe-Gen-5"><span class="vivaa">PCIe Gen 5</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/o-cung-hdd" class="head"  ><span>HDD</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-hdd/2.5-inch"><span class="vivaa">2.5 Inch</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-hdd/3.5-inch"><span class="vivaa">3.5 Inch</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-hdd/5400-RPM"><span class="vivaa">5400 RPM</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-hdd/5900-RPM"><span class="vivaa">5900 RPM</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-hdd/7200-RPM"><span class="vivaa">7200 RPM</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/usb" class="head"  ><span>USB</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/usb/32-GB"><span class="vivaa">32 GB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/usb/64-GB"><span class="vivaa">64 GB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/usb/128-GB"><span class="vivaa">128 GB</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="//theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/laptop"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu5.png?v=129" alt="Laptop" />
									<span>Laptop</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="/collections/laptop" class="head"  ><span>Laptop theo nhu cầu</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/laptop-gaming"><span class="vivaa">Laptop Gaming</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/laptop-van-phong"><span class="vivaa">Laptop văn phòng</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/laptop-msi" class="head"  ><span>Laptop MSI</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/MSI%20MODERN%20Series"><span class="vivaa">MODERN Series</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/MSI%20GF%20Series"><span class="vivaa">GF Series</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/MSI%20KATANA"><span class="vivaa">KATANA Series</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/laptop-asus" class="head"  ><span>Laptop ASUS</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/ASUS-EXPERTBOOK"><span class="vivaa">EXPERTBOOK</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/ASUS-VIVOBOOK"><span class="vivaa">VIVOBOOK</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/ASUS-ROG-Series"><span class="vivaa">ROG Series</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/ASUS-TUF-Series"><span class="vivaa">TUF Series</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/laptop-lenovo" class="head"  ><span>Laptop LENOVO</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/LENOVO-THINKBOOK"><span class="vivaa">THINKBOOK</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/LENOVO-IDEAPAD"><span class="vivaa">IDEAPAD</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/LENOVO-THINKPAD"><span class="vivaa">THINKPAD</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/LENOVO-YOGA"><span class="vivaa">YOGA</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/LENOVO-LEGION"><span class="vivaa">LEGION</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="https://tinhocngoisao.com/pages/hp-station-tang-man-hinh-khi-mua-laptop-pc?utm_source=Website&utm_medium=menu&utm_campaign=clickHP" class="head"  ><span>Laptop HP</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/HP-ELITEBOOK"><span class="vivaa">ELITEBOOK</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/HP-PAVILION"><span class="vivaa">PAVILION</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/HP-VICTUS"><span class="vivaa">VICTUS</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/HP-240-340"><span class="vivaa">240 / 340 Series</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/HP-14s-15s"><span class="vivaa">14s / 15s Series</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/laptop-gigabyte" class="head"  ><span>Laptop GIGABYTE</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/GIGABYTE-AORUS"><span class="vivaa">AORUS</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/GIGABYTE-G5-G7"><span class="vivaa">G5 / G7 Series</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/laptop-acer" class="head"  ><span>Laptop ACER</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/ACER-ASPIRE"><span class="vivaa">ASPIRE</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/ACER-NITRO"><span class="vivaa">NITRO</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/ACER-SWIFT"><span class="vivaa">SWIFT</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/laptop-dell" class="head"  ><span>Laptop DELL</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/DELL-VOSTRO"><span class="vivaa">VOSTRO</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/DELL-INSPIRON"><span class="vivaa">INSPIRON</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/laptop" class="head"  ><span>Laptop khác</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/laptop-intel"><span class="vivaa">Laptop Intel</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/laptop-fujitsu"><span class="vivaa">Laptop Fujitsu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/laptop-huawei"><span class="vivaa">Laptop Huawei</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/laptop-lg"><span class="vivaa">Laptop LG</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/laptop-hang-trung-bay"><span class="vivaa">Laptop trưng bày</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop-intel-core-i3"><span class="vivaa">Laptop Core i3</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop-intel-core-i5-1"><span class="vivaa">Laptop Core i5</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/laptop" class="head"  ><span>Laptop theo VGA</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/Laptop-GTX-1650-or-1650Ti"><span class="vivaa">GTX 1650 / 1650Ti</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/RTX-40-Series"><span class="vivaa">RTX 40 Series</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/Laptop-RTX-3050-or-3050Ti"><span class="vivaa">RTX 3050 / 3050Ti</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/Laptop-RTX-3060"><span class="vivaa">RTX 3060</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/Laptop-RTX-3070-or-3070Ti"><span class="vivaa">RTX 3070 / 3070Ti</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/Laptop-RTX-3080-or-3080Ti"><span class="vivaa">RTX 3080 / 3080Ti</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/laptop/VGA-AMD"><span class="vivaa">VGA AMD</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/laptop" class="head"  ><span>Laptop theo giá</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/laptop-duoi-15-trieu"><span class="vivaa">Laptop dưới 15 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/laptop-tu-15-20-trieu"><span class="vivaa">Laptop từ 15 - 20 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/laptop-20-25-trieu"><span class="vivaa">Laptop 20 - 25 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/laptop-25-30-trieu"><span class="vivaa">Laptop 25 - 30 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/laptop-tren-30-trieu"><span class="vivaa">Laptop trên 30 triệu</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/phu-kien-laptop" class="head"  ><span>Phụ kiện Laptop</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/balo"><span class="vivaa">Balo</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/tan-nhiet-laptop"><span class="vivaa">Đế tản nhiệt</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/bo-ve-sinh-laptop"><span class="vivaa">Bộ vệ sinh</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/ram-laptop"><span class="vivaa">Ram laptop</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pin-laptop"><span class="vivaa">Pin laptop</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/adapter-laptop"><span class="vivaa">Adapter laptop</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/o-cung-ssd/"><span class="vivaa">SSD Laptop</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/phan-mem" class="head"  ><span>Phần Mềm</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime arrowline">
														<a href="/collections/phan-mem"><span class="vivaa">Microsoft Windows</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/products/phan-mem-microsoft-windows-10-pro-64bit-eng-intl-1pk-dsp-oei-dvd-fqc-08929"><span>Windows 10 Pro (FQC-08929)</span></a>
															</li>
															
															<li class="">
																<a href="/products/phan-mem-microsoft-windows-10-home-64bit-1pk-dsp-oei-dvd-kw9-00139"><span>Windows 10 Home (KW9-00138)</span></a>
															</li>
															
															<li class="">
																<a href="/products/phan-mem-windows-11-pro-64bit-eng-intl-1pk-dsp-oei-dvd-fqc-10528"><span>Windows 11 Pro (FQC-10528)</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/phan-mem"><span class="vivaa">Microsoft Office</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/products/phan-mem-microsoft-365-business-standard-5-thiet-bi-tai-khoan-word-excel-powerpoint-1tb-onedrive-for-business-outlook"><span>Microsoft 365 Business Standard 5PC</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/phan-mem"><span class="vivaa">Antivirus</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/products/phan-mem-diet-virus-kaspersky-internet-security-cho-3pc-1year-kl1854mucfs"><span>Kaspersky 3PC KL1854MUCFS</span></a>
															</li>
															
															<li class="">
																<a href="/products/phan-mem-diet-virus-bkav-pro-internet-security-ai-3-3pc"><span>Bkav Pro AI 3 3PC</span></a>
															</li>
															
															<li class="">
																<a href="/products/phan-mem-diet-virus-kaspersky-plus-1u-1-thiet-bi-nam"><span>Kaspersky Plus 1U</span></a>
															</li>
															
															<li class="">
																<a href="/products/phan-mem-diet-virus-kaspersky-anti-virus-1pc-12th-box"><span>Kaspersky 1PC</span></a>
															</li>
															
															<li class="">
																<a href="/products/phan-mem-diet-virus-bkav-pro-internet-security-1pc-12t"><span>Bkav Pro 1PC</span></a>
															</li>
															
															<li class="">
																<a href="/products/phan-mem-diet-virus-kaspersky-anti-virus-3-may-tinh-12-thang"><span>Kaspersky 3PC</span></a>
															</li>
															
															<li class="">
																<a href="/products/phan-mem-diet-virus-kaspersky-internet-security-chinh-hang-1-may-tinh-1-nam"><span>Kaspersky 1PC</span></a>
															</li>
															
														</ul>
														

													</li>
													
												</ul>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="//theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/pc-gaming"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu6.png?v=129" alt="PC Gaming - Học Tập" />
									<span>PC Gaming - Học Tập</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="/collections/pc-gaming" class="head"  ><span>PC Gaming Star</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-gaming/Standard"><span class="vivaa">PC GAMING - STANDARD</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-gaming/Mid-Hi-End"><span class="vivaa">PC GAMING MID HI-END</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-gaming/Hi-End"><span class="vivaa">PC GAMING HI-END</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-gaming/Project"><span class="vivaa">PC PROJECT GAMING</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/pc-gaming" class="head"  ><span>Theo giá</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/pc-gaming/Dưới-3-triệu"><span class="vivaa">Dưới 3 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-gaming/3-triệu-đến-5-triệu"><span class="vivaa">3 triệu đến 5 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-gaming/5-triệu-đến-10-triệu"><span class="vivaa">5 triệu đến 10 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-gaming/10-triệu-đến-15-triệu"><span class="vivaa">10 triệu đến 15 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-gaming/15-triệu-đến-20-triệu"><span class="vivaa">15 triệu đến 20 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-gaming/20-triệu-đến-30-triệu"><span class="vivaa">20 triệu đến 30 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-gaming/30-triệu-đến-40-triệu"><span class="vivaa">30 triệu đến 40 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-gaming/40-triệu-đến-50-triệu"><span class="vivaa">40 triệu đến 50 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-gaming/Trên-50-triệu"><span class="vivaa">Trên 50 triệu</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="https://tinhocngoisao.com/collections/pc-gaming/" class="head"  ><span>Theo ram</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-gaming/8GBx1"><span class="vivaa">8GB (1x8GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-gaming/8GBx2"><span class="vivaa">16GB (2x8GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-gaming/16GBx1"><span class="vivaa">16GB (1x16GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-gaming/16GBx2"><span class="vivaa">32GB (2x16GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-gaming/32GBx1"><span class="vivaa">32GB (1x32GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-gaming/32GBx2"><span class="vivaa">64GB (2x32GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-gaming/64GBx1"><span class="vivaa">64GB (1x64GB)</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/pc-gaming" class="head"  ><span>Theo VGA</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime arrowline">
														<a href="https://tinhocngoisao.com/collections/pc-gaming/PC-VGA-NVIDIA"><span class="vivaa">VGA NVIDIA</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-gaming/NVIDIA-GT-1030"><span>GT 1030</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-gaming/NVIDIA-GTX-1650"><span>GTX 1650</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-gaming/NVIDIA-GTX-1660-Super"><span>GTX 1660 Super</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-2060-Super"><span>RTX 2060 Super</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-3050"><span>RTX 3050</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-3060"><span>RTX 3060</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-3060-Ti"><span>RTX 3060 Ti</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-3070"><span>RTX 3070</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-3070-Ti"><span>RTX 3070 Ti</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-3080"><span>RTX 3080</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-3080-Ti"><span>RTX 3080 Ti</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-3090"><span>RTX 3090</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-4060"><span>RTX 4060</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-4060-Ti"><span>RTX 4060 Ti</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-4070"><span>RTX 4070</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-4070-Ti"><span>RTX 4070 Ti</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-4080"><span>RTX 4080</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/NVIDIA-RTX-4090"><span>RTX 4090</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="https://tinhocngoisao.com/collections/pc-gaming/PC-VGA-AMD"><span class="vivaa">VGA AMD</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="/collections/pc-gaming/AMD-RX-6500-XT"><span>RX 6500 XT</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/AMD-RX-6600"><span>RX 6600</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/AMD-RX-6600-XT"><span>RX 6600 XT</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/AMD-RX-6700-XT"><span>RX 6700 XT</span></a>
															</li>
															
															<li class="">
																<a href="/collections/pc-gaming/AMD-RX-6800-XT"><span>RX 6800 XT</span></a>
															</li>
															
														</ul>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/pc-gaming" class="head"  ><span>Theo CPU</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime arrowline">
														<a href="/collections/pc-gaming/PC-CPU-INTEL"><span class="vivaa">INTEL</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-gaming/PC-Core-i3"><span>Core i3</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-gaming/PC-Core-i5"><span>Core i5</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-gaming/PC-Core-i7"><span>Core i7</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-gaming/PC-Core-i9"><span>Core i9</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/pc-gaming/AMD"><span class="vivaa">AMD</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-gaming/PC-Ryzen-3"><span>Ryzen 3</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-gaming/PC-Ryzen-5"><span>Ryzen 5</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-gaming/PC-Ryzen-7"><span>Ryzen 7</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-gaming/PC-Ryzen-9"><span>Ryzen 9</span></a>
															</li>
															
														</ul>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/pc-gaming" class="head"  ><span>PC Theo hãng</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/pc-gaming/PC-Asus"><span class="vivaa">PC Gaming Asus</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-gaming/PC-Gigabyte"><span class="vivaa">PC Gaming Gigabyte</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-gaming/PC-Colorful"><span class="vivaa">PC Gaming Colorful</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-gaming/PC-MSI"><span class="vivaa">PC Gaming MSI</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="//theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/pc-van-phong"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu7.png?v=129" alt="PC Văn Phòng - Làm Việc" />
									<span>PC Văn Phòng - Làm Việc</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="/collections/pc-van-phong" class="head"  ><span>Máy bộ</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-van-phong"><span class="vivaa">Máy bộ STAR</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/may-bo-hp"><span class="vivaa">Máy bộ HP</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/may-bo-lenovo"><span class="vivaa">Máy bộ Lenovo</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/may-bo-asus"><span class="vivaa">Máy bộ Asus</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/may-bo-intel"><span class="vivaa">Máy bộ Intel</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/may-bo-zotac-moi"><span class="vivaa">Máy bộ Zotac</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/may-bo-dell"><span class="vivaa">Máy bộ Dell</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/pc-van-phong" class="head"  ><span>Theo CPU</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime arrowline">
														<a href="/collections/pc-van-phong/PC-CPU-INTEL"><span class="vivaa">Intel</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-van-phong/PC-Core-i3"><span>Core i3</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-van-phong/PC-Core-i5"><span>Core i5</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-van-phong/PC-Core-i7"><span>Core i7</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-van-phong/PC-Core-i9"><span>Core i9</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/pc-van-phong/PC-CPU-AMD"><span class="vivaa">AMD</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-van-phong/PC-Ryzen-3"><span>Ryzen 3</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-van-phong/PC-Ryzen-5"><span>Ryzen 5</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-van-phong/PC-Ryzen-7"><span>Ryzen 7</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-van-phong/PC-Ryzen-9"><span>Ryzen 9</span></a>
															</li>
															
														</ul>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/pc-van-phong" class="head"  ><span>Theo Ram</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/8GBx1"><span class="vivaa">8GB (1x8GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/16GBx1"><span class="vivaa">16GB (1x16GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/8GBx2"><span class="vivaa">16GB (2x8GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/32GBx1"><span class="vivaa">32GB (1x32GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/16GBx2"><span class="vivaa">32GB (2x16GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/64GBx1"><span class="vivaa">64GB (1x64GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/64GBx2"><span class="vivaa">64GB (2x32GB)</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/pc-van-phong" class="head"  ><span>Theo dung lượng</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/128GB"><span class="vivaa">128GB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/240GB"><span class="vivaa">240GB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/256GB"><span class="vivaa">256GB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/360GB"><span class="vivaa">360GB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/480GB"><span class="vivaa">480GB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/500GB"><span class="vivaa">500GB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/512GB"><span class="vivaa">512GB</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/pc-van-phong" class="head"  ><span>Theo giá</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/Dưới-3-triệu"><span class="vivaa">Dưới 3 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/3-triệu-đến-5-triệu"><span class="vivaa">3 triệu đến 5 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/5-triệu-đến-10-triệu"><span class="vivaa">5 triệu đến 10 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/10-triệu-đến-15-triệu"><span class="vivaa">10 triệu đến 15 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/15-triệu-đến-20-triệu"><span class="vivaa">15 triệu đến 20 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/20-triệu-đến-30-triệu"><span class="vivaa">20 triệu đến 30 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/30-triệu-đến-40-triệu"><span class="vivaa">30 triệu đến 40 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/40-triệu-đến-50-triệu"><span class="vivaa">40 triệu đến 50 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-van-phong/Trên-50-triệu"><span class="vivaa">Trên 50 triệu</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="//theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/pc-do-hoa"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu8.png?v=129" alt="PC Đồ Hoạ - Thiết Kế" />
									<span>PC Đồ Hoạ - Thiết Kế</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="https://tinhocngoisao.com/collections/pc-do-hoa/PC-Creator" class="head"  ><span>PC Creator</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa"><span class="vivaa">PC Đồ hoạ, thiết kế</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-do-hoa/PC-Dung-Phim"><span class="vivaa">PC Dựng phim</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/pc-do-hoa/PC-Render"><span class="vivaa">PC Render</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/pc-do-hoa" class="head"  ><span>Theo Ram</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/8GBx1"><span class="vivaa">8GB (1x8GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/16GBx1"><span class="vivaa">16GB (1x16GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/8GBx2"><span class="vivaa">16GB (2x8GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/32GBx1"><span class="vivaa">32GB (1x32GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/16GBx2"><span class="vivaa">32GB (2x16GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/64GBx1"><span class="vivaa">64GB (1x64GB)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/64GBx2"><span class="vivaa">64GB (2x32GB)</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/pc-do-hoa" class="head"  ><span>Theo VGA</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime arrowline">
														<a href="/collections/pc-do-hoa/PC-VGA-NVIDIA"><span class="vivaa">NVIDIA</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-GT-1030"><span>GT 1030</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-GTX-1650"><span>GTX 1650</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-GTX-1660-super"><span>GTX 1660 Super</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-2060-super"><span>RTX 2060 Super</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-3050"><span>RTX 3050</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-3060"><span>RTX 3060</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-3060-Ti"><span>RTX 3060 Ti</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-3070"><span>RTX 3070</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-3070-Ti"><span>RTX 3070 Ti</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-3080"><span>RTX 3080</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-3080-Ti"><span>RTX 3080 Ti</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-3090"><span>RTX 3090</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-4060"><span>RTX 4060</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-4060-Ti"><span>RTX 4060 Ti</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-4070"><span>RTX 4070</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-4070-Ti"><span>RTX 4070 Ti</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-4080"><span>RTX 4080</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/NVIDIA-RTX-4090"><span>RTX 4090</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/pc-do-hoa/PC-VGA-AMD"><span class="vivaa">AMD</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/AMD-RX-6500-XT"><span>RX 6500 XT</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/AMD-RX-6600"><span>RX 6600</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/AMD-RX-6600-XT"><span>RX 6600 XT</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/AMD-RX-6700-XT"><span>RX 6700 XT</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/AMD-RX-6800-XT"><span>RX 6800 XT</span></a>
															</li>
															
														</ul>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/pc-do-hoa" class="head"  ><span>Theo CPU</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime arrowline">
														<a href="/collections/pc-do-hoa/Intel"><span class="vivaa">Intel</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/PC-Core-i3"><span>Core i3</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/PC-Core-i5"><span>Core i5</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/PC-Core-i7"><span>Core i7</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/PC-Core-i9"><span>Core i9</span></a>
															</li>
															
														</ul>
														

													</li>
													
													<li class="relativetime arrowline">
														<a href="/collections/pc-do-hoa/AMD"><span class="vivaa">AMD</span></a>
														
														<ul class="levlup_4" dataw="0" >
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/PC-Ryzen-3"><span>Ryzen 3</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/PC-Ryzen-5"><span>Ryzen 5</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/PC-Ryzen-7"><span>Ryzen 7</span></a>
															</li>
															
															<li class="">
																<a href="https://tinhocngoisao.com/collections/pc-do-hoa/PC-Ryzen-9"><span>Ryzen 9</span></a>
															</li>
															
														</ul>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/pc-do-hoa" class="head"  ><span>Theo khoảng giá</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/Dưới-3-triệu"><span class="vivaa">Dưới 10 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/3-triệu-đến-5-triệu"><span class="vivaa">3 triệu đến 5 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/5-triệu-đến-10-triệu"><span class="vivaa">5 triệu đến 10 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/10-triệu-đến-15-triệu"><span class="vivaa">10 triệu đến 15 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/15-triệu-đến-20-triệu"><span class="vivaa">15 triệu đến 20 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/20-triệu-đến-30-triệu"><span class="vivaa">20 triệu đến 30 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/30-triệu-đến-40-triệu"><span class="vivaa">30 triệu đến 40 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/40-triệu-đến-50-triệu"><span class="vivaa">40 triệu đến 50 triệu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/pc-do-hoa/Trên-50-triệu"><span class="vivaa">Trên 50 triệu</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="//theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/man-hinh-may-tinh"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu9.png?v=129" alt="Màn hình máy tính" />
									<span>Màn hình máy tính</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="/collections/man-hinh-may-tinh" class="head"  ><span>Màn hình theo hãng</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/man-hinh-asus"><span class="vivaa">Asus</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/DELL"><span class="vivaa">Dell</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/SAMSUNG"><span class="vivaa">Samsung</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/VSP"><span class="vivaa">VSP</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/AOC"><span class="vivaa">AOC</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/GIGABYTE"><span class="vivaa">Gigabyte</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/Viewsonic"><span class="vivaa">Viewsonic</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/MSI"><span class="vivaa">MSI</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/ACER"><span class="vivaa">Acer</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/man-hinh-may-tinh" class="head"  ><span>Theo nhu cầu</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/thiet-ke-do-hoa"><span class="vivaa">Thiết kế đồ hoạ</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/Gaming"><span class="vivaa">Gaming</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/van-phong"><span class="vivaa">Văn phòng</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/tv-tivi"><span class="vivaa">Tivi</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/man-hinh-may-tinh" class="head"  ><span>Theo kích thước</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/19-inch"><span class="vivaa">19 inch</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/20-inch"><span class="vivaa">20 inch</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/22-inch"><span class="vivaa">22 inch</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/24-inch"><span class="vivaa">24 inch</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/27-inch"><span class="vivaa">27 inch</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/32-inch"><span class="vivaa">32 inch</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/34-inch"><span class="vivaa">34 inch</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/49-inch"><span class="vivaa">49 inch</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/man-hinh-may-tinh" class="head"  ><span>Theo tần số quét</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/60Hz"><span class="vivaa">60 Hz</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/75Hz"><span class="vivaa">75 Hz</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/100Hz"><span class="vivaa">100 Hz</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/120Hz"><span class="vivaa">120 Hz</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/144Hz"><span class="vivaa">144 Hz</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/165Hz"><span class="vivaa">165 Hz</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/170Hz"><span class="vivaa">170 Hz</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/180Hz"><span class="vivaa">180 Hz</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/240Hz"><span class="vivaa">240 Hz</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/360Hz"><span class="vivaa">360 Hz</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/man-hinh-may-tinh" class="head"  ><span>Theo tấm nền</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/Man-hinh-IPS"><span class="vivaa">IPS</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/Superclear-IPS"><span class="vivaa">Superclear IPS</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/Man-hinh-VA"><span class="vivaa">VA</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/Man-hinh-TN"><span class="vivaa">TN</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/man-hinh-may-tinh" class="head"  ><span>Theo bề mặt</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/man-hinh-phang"><span class="vivaa">Màn hình phẳng</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/man-hinh-cong"><span class="vivaa">Màn hình cong</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/man-hinh-may-tinh" class="head"  ><span>Thời gian phản hồi</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/0.5ms-(GTG)"><span class="vivaa">0.5ms (GTG)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/1ms-(GTG)"><span class="vivaa">1ms (GTG)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/2ms-(GTG)"><span class="vivaa">2ms (GTG)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/4ms-(GTG)"><span class="vivaa">4ms (GTG)</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/5ms-(GTG)"><span class="vivaa">5ms (GTG)</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/man-hinh-may-tinh" class="head"  ><span>Công nghệ</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/AMD-FreeSync"><span class="vivaa">AMD FreeSync</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/NVIDIA-GSync"><span class="vivaa">NVIDIA GSync</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/Adaptive-Sync"><span class="vivaa">Adaptive Sync</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/FreeSync-Premium"><span class="vivaa">FreeSync Premium</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/man-hinh-may-tinh" class="head"  ><span>Theo độ phân giải</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/HD"><span class="vivaa">HD</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/Full-HD"><span class="vivaa">Full HD</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/QHD"><span class="vivaa">QHD</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/man-hinh-may-tinh/WQHD"><span class="vivaa">WQHD</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="https://theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/phu-kien"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu10.png?v=129" alt="Phụ kiện & Phần mềm" />
									<span>Phụ kiện & Phần mềm</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="/collections/phu-kien-laptop" class="head"  ><span>Phụ kiện Laptop</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-laptop/Balo-va-tui"><span class="vivaa">Balo & Túi</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-laptop/De-tan-nhiet"><span class="vivaa">Đế tản nhiệt</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-laptop/Bo-ve-sinh"><span class="vivaa">Bộ vệ sinh</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-laptop/Pin-va-adapter"><span class="vivaa">Pin & Adapter</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/phu-kien-gear" class="head"  ><span>Phụ kiện Gear</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-gear/Keycap"><span class="vivaa">Keycap</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-gear/nut-click-chuot"><span class="vivaa">Nút click chuột</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-gear/nut-nguon"><span class="vivaa">Nút nguồn</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-gear/Gia-do-tai-nghe"><span class="vivaa">Giá đỡ tai nghe</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/phu-kien-tan-nhiet" class="head"  ><span>Phụ kiện Tản nhiệt</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-tan-nhiet/keo-tan-nhiet"><span class="vivaa">Keo tản nhiệt</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-tan-nhiet/gong-socket"><span class="vivaa">Gông socket</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-tan-nhiet/hub-dieu-khien"><span class="vivaa">Hub điều khiển</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/phu-kien-vga-nguon" class="head"  ><span>Phụ kiện VGA & Nguồn</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-vga-nguon/gia-do-vga"><span class="vivaa">Giá đỡ VGA</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-vga-nguon/cap-nguon-noi-dai"><span class="vivaa">Cáp nguồn nối dài</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/phu-kien-man-hinh" class="head"  ><span>Phụ kiện Màn hình</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-man-hinh/chan-man-hinh"><span class="vivaa">Chân màn hình</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-man-hinh/cap-man-hinh"><span class="vivaa">Cáp màn hình</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/phu-kien-o-cung" class="head"  ><span>Phụ kiện Ổ cứng</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-o-cung/caddy-bay"><span class="vivaa">Caddy Bay</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-o-cung/thanh-tan-nhiet"><span class="vivaa">Thanh tản nhiệt</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-o-cung/cap-sata"><span class="vivaa">Cáp sata</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/phu-kien-mang" class="head"  ><span>Phụ kiện Mạng</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-mang/dau-mang"><span class="vivaa">Đầu mạng</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-mang/cap-mang"><span class="vivaa">Cáp mạng</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-mang/card-mang"><span class="vivaa">Card mạng</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/phu-kien-may-in" class="head"  ><span>Phụ kiện Máy in</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-may-in/lo-muc"><span class="vivaa">Lọ mực</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-may-in/cum-muc"><span class="vivaa">Cụm mực</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/phan-mem" class="head"  ><span>Phần mềm</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phan-mem/Windows"><span class="vivaa">Key Windows</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phan-mem/Antivirus"><span class="vivaa">Phần mềm diệt Virus</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phan-mem/Office"><span class="vivaa">Office</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="https://theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/ban-ghe-gaming"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu11.png?v=129" alt="Bàn, Ghế Gaming" />
									<span>Bàn, Ghế Gaming</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="/collections/ban-gaming" class="head"  ><span>Bàn Gaming</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ban-ghe-gaming/T-Desk"><span class="vivaa">Bàn T Desk</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ban-ghe-gaming/K-Desk"><span class="vivaa">Bàn K Desk</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ban-ghe-gaming/U-Desk"><span class="vivaa">Bàn U Desk</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ban-ghe-gaming/Z-Desk"><span class="vivaa">Bàn Z Desk</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ban-ghe-gaming/nang-ha"><span class="vivaa">Bàn nâng hạ</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/ghe-gaming" class="head"  ><span>Ghế Gaming</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ghe-gaming/E-Dra"><span class="vivaa">Ghế E-Dra</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ghe-gaming/warrior"><span class="vivaa">Ghế Warrior</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ghe-gaming/Corsair"><span class="vivaa">Ghế Corsair</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ghe-gaming/Cooler-Master"><span class="vivaa">Ghế Cooler Master</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ghe-gaming/AKRacing"><span class="vivaa">Ghế AKRacing</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ghe-gaming/Gigabyte"><span class="vivaa">Ghế Gigabyte</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/ghe-cong-thai-hoc" class="head"  ><span>Ghế công thái học</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ghe-cong-thai-hoc/Sihoo"><span class="vivaa">Sihoo</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ghe-cong-thai-hoc/Warrior"><span class="vivaa">Warrior</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/ban-ghe-gaming" class="head"  ><span>Bàn ghế theo hãng</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ban-ghe-gaming/E-DRA"><span class="vivaa">E-Dra</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ban-ghe-gaming/SIHOO"><span class="vivaa">Sihoo</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ban-ghe-gaming/CENTAUR"><span class="vivaa">Centaur</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ban-ghe-gaming/Warrior"><span class="vivaa">Warrior</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ban-ghe-gaming/THERMALTAKE"><span class="vivaa">Thermaltake</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ban-ghe-gaming/AKRacing"><span class="vivaa">AKRacing</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/ghe-net" class="head"  ><span>Ghế game net</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ghe-net/Sofa"><span class="vivaa">Sofa</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ghe-net/Chan-quy"><span class="vivaa">Chân quỳ</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ghe-net/Chan-xoay"><span class="vivaa">Chân xoay</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="https://theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/chuot-ban-phim-tai-nghe"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu12.png?v=129" alt="Phím, Chuột, Tai Nghe" />
									<span>Phím, Chuột, Tai Nghe</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="/collections/chuot-ban-phim-tai-nghe" class="head"  ><span>Thương hiệu</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Logitech"><span class="vivaa">Logitech</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/DareU"><span class="vivaa">DareU</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Akko"><span class="vivaa">Akko</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Asus"><span class="vivaa">Asus</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Razer"><span class="vivaa">Razer</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Rapoo"><span class="vivaa">Rapoo</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Corsair"><span class="vivaa">Corsair</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/E-Dra"><span class="vivaa">E-Dra</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/IQUNIX"><span class="vivaa">IQUNIX</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/chuot-ban-phim-tai-nghe" class="head"  ><span>Thương hiệu</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Fuhlen"><span class="vivaa">Fuhlen</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Royal-Kludge"><span class="vivaa">Royal Kludge</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Newmen"><span class="vivaa">Newmen</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Zidli"><span class="vivaa">Zidli</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Motospeed"><span class="vivaa">Motospeed</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/HyperX"><span class="vivaa">HyperX</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/chuot-ban-phim-tai-nghe" class="head"  ><span>Phụ kiện</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-gear/Keycap"><span class="vivaa">Keycap</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/phu-kien-gear/nut-click-chuot"><span class="vivaa">Nút click</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tay-cam-choi-game/"><span class="vivaa">Tay cầm game</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/chuot-ban-phim-tai-nghe" class="head"  ><span>Bàn phím</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/ban-phim-co"><span class="vivaa">Bàn phím cơ</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/ban-phim-gia-co"><span class="vivaa">Bàn phím giả cơ</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/ban-phim-co"><span class="vivaa">Bàn phím gaming</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/ban-phim-co/Wireless"><span class="vivaa">Bàn phím không dây</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/chuot-ban-phim-tai-nghe" class="head"  ><span>Chuột</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/chuot-van-phong"><span class="vivaa">Chuột văn phòng</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/chuot-gaming"><span class="vivaa">Chuột Gaming</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/chuot-khong-day"><span class="vivaa">Chuột không dây</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/chuot-ban-phim-tai-nghe" class="head"  ><span>Kết nối</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Co-day"><span class="vivaa">Có dây</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Bluetooth"><span class="vivaa">Bluetooth</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/chuot-ban-phim-tai-nghe/Wireless"><span class="vivaa">Wireless</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/lot-chuot" class="head"  ><span>Lót chột</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/lot-chuot-size-lon-1"><span class="vivaa">Lót chuột size lớn</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/lot-chuot-size-nho"><span class="vivaa">Lót chuột size nhỏ</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/tai-nghe" class="head"  ><span>Tai nghe</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/tai-nghe-gaming"><span class="vivaa">Tai nghe Gaming</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/phu-kien-tai-nghe"><span class="vivaa">Phụ kiện tai nghe</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/gia-treo-tai-nghe"><span class="vivaa">Giá treo tai nghe</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="https://theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/thiet-bi-mang"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu13.png?v=129" alt="Thiết Bị Mạng" />
									<span>Thiết Bị Mạng</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="/collections/thiet-bi-mang" class="head"  ><span>Hãng sản xuất</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Aptek"><span class="vivaa">Aptek</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Asus"><span class="vivaa">Asus</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/DLink"><span class="vivaa">D-Link</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Draytek"><span class="vivaa">Draytek</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Tenda"><span class="vivaa">Tenda</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/TP-Link"><span class="vivaa">TP-Link</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/router-wifi" class="head"  ><span>Router Wifi</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Bo-phat-wifi"><span class="vivaa">Bộ phát WiFi</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Bo-Mesh-Wifi"><span class="vivaa">Bộ Mesh WiFi</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="https://tinhocngoisao.com/collections/thiet-bi-mang" class="head"  ><span>Thu WiFi</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Card-mang"><span class="vivaa">Card mạng</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/USB-thu-wifi"><span class="vivaa">USB thu WiFi</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Chuan-N"><span class="vivaa">Chuẩn N</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Chuan-AC"><span class="vivaa">Chuẩn AC</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Chuan-AX"><span class="vivaa">Chuẩn AX</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/switch" class="head"  ><span>Switch</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Switch-5-ports"><span class="vivaa">Switch 5 ports</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Switch-8-ports"><span class="vivaa">Switch 8 ports</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Switch-16-ports"><span class="vivaa">Switch 16 ports</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-mang/Switch-24-ports"><span class="vivaa">Switch 24 ports</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/phu-kien-mang" class="head"  ><span>Phụ kiện mạng</span>
													
												</a>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="https://theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/thiet-bi-am-thanh"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu14.png?v=129" alt="Thiết bị âm thanh" />
									<span>Thiết bị âm thanh</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="/collections/tai-nghe" class="head"  ><span>Thương hiệu tai nghe</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/Logitech"><span class="vivaa">Logitech</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/HyperX"><span class="vivaa">HyperX</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/DareU"><span class="vivaa">DareU</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/Rapoo"><span class="vivaa">Rapoo</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/Razer"><span class="vivaa">Razer</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/Asus"><span class="vivaa">Asus</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/tai-nghe" class="head"  ><span>Thương hiệu tai nghe</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/Zidli"><span class="vivaa">Zidli</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/Xiberia"><span class="vivaa">Xiberia</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/E-Dra"><span class="vivaa">E-Dra</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/Corsair"><span class="vivaa">Corsair</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/tai-nghe" class="head"  ><span>Kết nối tai nghe</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/Co-day"><span class="vivaa">Có dây</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/Bluetooth"><span class="vivaa">Bluetooth</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/Wireless"><span class="vivaa">Wireless</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/tai-nghe" class="head"  ><span>Kiểu tai nghe</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/Overear"><span class="vivaa">Over-Ear</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/tai-nghe/Inear"><span class="vivaa">In-Ear</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/loa-may-tinh" class="head"  ><span>Thương hiệu loa</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/loa-may-tinh/Logitech"><span class="vivaa">Logitech</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/loa-may-tinh/Soudmax"><span class="vivaa">Soudmax</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/loa-may-tinh/Colorfire"><span class="vivaa">Colorfire</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/loa-may-tinh/JBL"><span class="vivaa">JBL</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/loa-may-tinh" class="head"  ><span>Thương hiệu loa</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/loa-may-tinh/Bosston"><span class="vivaa">Bosston</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/loa-may-tinh/Edifier"><span class="vivaa">Edifier</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/loa-may-tinh/Kisonli"><span class="vivaa">Kisonli</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/loa-may-tinh/E-Dra"><span class="vivaa">E-Dra</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/loa-may-tinh" class="head"  ><span>Kết nối loa</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/loa-may-tinh/RCA"><span class="vivaa">RCA</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/loa-may-tinh/AUX"><span class="vivaa">AUX</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/loa-may-tinh/USB"><span class="vivaa">USB</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/loa-may-tinh/Bluetooth"><span class="vivaa">Bluetooth</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="https://theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
							
							<li class="li_child">
								<a href="/collections/camera"  >
									<img class="navIcon lazyload w-100" width="32" height="32"
											 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
											 data-src="https://theme.hstatic.net/200000420363/1001226108/14/hinhanhmenumenu15.png?v=129" alt="Camera, Webcam, Máy in" />
									<span>Camera, Webcam, Máy in</span>
									
									<i class="fa fa-angle-right"></i>
									
								</a>
								
								<div class="mainChild lv2" role="menu">
									<div class="main-child__content">
										<div class="main-child__wrapper" role="menu">
											
											<div class="main-child__item">
												<a href="/collections/camera" class="head"  ><span>Camera theo hãng</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/camera/imou"><span class="vivaa">IMou</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/camera/Ezviz"><span class="vivaa">EZVIZ</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/camera/Hikvision"><span class="vivaa">HikVision</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/camera/Dahua"><span class="vivaa">Dahua</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/webcam" class="head"  ><span>Webcam</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/webcam/VSP"><span class="vivaa">VSP</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/webcam/Asus"><span class="vivaa">Asus</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/webcam/Logitech"><span class="vivaa">Logitech</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/webcam/Dahua"><span class="vivaa">Dahua</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/webcam/Hikvision"><span class="vivaa">HikVision</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/camera" class="head"  ><span>Camera theo độ phân giải</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/camera/Camera-2MP"><span class="vivaa">Camera 2MP</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/camera/Camera-3MP"><span class="vivaa">Camera 3MP</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/camera/Camera-4MP"><span class="vivaa">Camera 4MP</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/camera/Camera-5MP"><span class="vivaa">Camera 5MP</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/camera" class="head"  ><span>Tính năng</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/camera/Co-mic"><span class="vivaa">Có mic</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/camera/Co-loa"><span class="vivaa">Có loa</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/thiet-bi-van-phong-may-in" class="head"  ><span>Máy in</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-van-phong-may-in/may-in-den-trang"><span class="vivaa">Máy in đen trắng</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-van-phong-may-in/may-in-mau"><span class="vivaa">Máy in màu</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-van-phong-may-in/may-in-hoa-don"><span class="vivaa">Máy in hoá đơn</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/thiet-bi-van-phong-may-in" class="head"  ><span>Máy in theo hãng</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-van-phong-may-in/Canon"><span class="vivaa">Canon</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-van-phong-may-in/Epson"><span class="vivaa">Epson</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-van-phong-may-in/Brother"><span class="vivaa">Brother</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="https://tinhocngoisao.com/collections/thiet-bi-van-phong-may-in/HP"><span class="vivaa">HP</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
											<div class="main-child__item">
												<a href="/collections/thiet-bi-van-phong-may-in" class="head"  ><span>Mực in</span>
													
													<i class="fa fa-angle-down hidden-md hidden-lg" aria-hidden="true"></i>
													
												</a>
												
												<ul class="levlup_3">
													
													<li class="relativetime ">
														<a href="/collections/cum-muc"><span class="vivaa">Cụm mực</span></a>
														

													</li>
													
													<li class="relativetime ">
														<a href="/collections/lo-muc-do"><span class="vivaa">Lọ mực đổ</span></a>
														

													</li>
													
												</ul>
												
											</div>
											
										</div>
										<div class="main-child__banner"> 
											<a href="/" target="_blank"  >
												<img src="https://theme.hstatic.net/200000420363/1000988446/14/nav_banner_1.png?v=2262" alt="Linh Kiện Mới" />
											</a>
										</div>
									</div>
								</div>
								
							</li>
							
						</ul>
					</div>
				</div>
				<div class="nav-main__menu navSiteMain">
					
					<ul class="nav-navbar">

						
						
						
						<li class="">
							<a href="https://icafestargaming.vn/" class="" aria-label="Lắp đặt phòng net">
								<img class="navIcon" width="32" height="32"
										 src="https://theme.hstatic.net/200000420363/1001226108/14/icon_nav_1.png?v=129" alt="Lắp đặt phòng net" />
								<span>Lắp đặt phòng net</span>
							</a>
						</li>
						
						
						
						
						<li class="">
							<a href="/pages/tra-gop" class="" aria-label="Trả góp">
								<img class="navIcon" width="32" height="32"
										 src="https://theme.hstatic.net/200000420363/1001226108/14/icon_nav_2.png?v=129" alt="Trả góp" />
								<span>Trả góp</span>
							</a>
						</li>
						
						<li class="li_child">
							<a href="/pages/bang-gia-ban" aria-label="Bảng giá" class="">
								<img class="navIcon" width="32" height="32"
										 src="https://theme.hstatic.net/200000420363/1001226108/14/icon_nav_3.png?v=129" alt="Bảng giá"/>
								<span>Bảng giá</span>
							</a>
							<ul class="mainChild levlup_2" role="menu">
								
								<li class="">
									<a href="/pages/bang-gia-mua-cu-linh-kien"aria-label="Bảng giá mua cũ"><span>Bảng giá mua cũ</span></a>
								</li>
								
								<li class="">
									<a href="/pages/bang-gia-ban"aria-label="Bảng giá bán"><span>Bảng giá bán</span></a>
								</li>
								
								<li class="">
									<a href="https://tinhocngoisao.com/pages/bang-gia-outlet"aria-label="Bảng giá outlet"><span>Bảng giá outlet</span></a>
								</li>
								
							</ul>
						</li>
						
						
						
						
						<li class="">
							<a href="/pages/xay-dung-cau-hinh" class="" aria-label="Xây dựng cấu hình">
								<img class="navIcon" width="32" height="32"
										 src="https://theme.hstatic.net/200000420363/1001226108/14/icon_nav_4.png?v=129" alt="Xây dựng cấu hình" />
								<span>Xây dựng cấu hình</span>
							</a>
						</li>
						
						
						
						
						<li class="">
							<a href="/pages/bao-hanh" class="" aria-label="Chính sách bảo hành">
								<img class="navIcon" width="32" height="32"
										 src="https://theme.hstatic.net/200000420363/1001226108/14/icon_nav_5.png?v=129" alt="Chính sách bảo hành" />
								<span>Chính sách bảo hành</span>
							</a>
						</li>
						
						
						
						
						<li class="">
							<a href="https://traucay.vn/" class="" aria-label="Thiết bị mining">
								<img class="navIcon" width="32" height="32"
										 src="https://theme.hstatic.net/200000420363/1001226108/14/icon_nav_6.png?v=129" alt="Thiết bị mining" />
								<span>Thiết bị mining</span>
							</a>
						</li>
						
						
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="nav-main__menu navSiteMain">
					
					<ul class="nav-navbar">

						
						
						
						<li class="">
							<a href="https://icafestargaming.vn/" class="" aria-label="Lắp đặt phòng net" rel="nofollow">
								<img class="navIcon" width="32" height="32" src="/https:/theme.hstatic.net/200000420363/1001226108/14/icon_nav_1.png?v=139" alt="Lắp đặt phòng net"/>
								<span>Lắp đặt phòng net</span>
							</a>
						</li>
						
						
						
						
						<li class="">
							<a href="/pages/tra-gop" class="" aria-label="Trả góp">
								<img class="navIcon" width="32" height="32" src="https://theme.hstatic.net/200000420363/1001226108/14/icon_nav_2.png?v=139" alt="Trả góp"/>
								<span>Trả góp</span>
							</a>
						</li>
						
						
						
						
						<li class="li_child">
							<a href="/pages/bang-gia-ban" aria-label="Bảng giá" class="">
								<img class="navIcon" width="32" height="32" src="https://theme.hstatic.net/200000420363/1001226108/14/icon_nav_3.png?v=139" alt="Bảng giá"/>
								<span>Bảng giá</span>
							</a>
							<ul class="mainChild levlup_2" role="menu">
								
								<li class="">
									<a href="/pages/bang-gia-mua-cu-linh-kien" aria-label="Bảng giá mua cũ"><span>Bảng giá mua cũ</span></a>
								</li>
								
								<li class="">
									<a href="/pages/bang-gia-ban" aria-label="Bảng giá bán"><span>Bảng giá bán</span></a>
								</li>
								
								<li class="">
									<a href="https://tinhocngoisao.com/pages/bang-gia-outlet" aria-label="Bảng giá outlet"><span>Bảng giá outlet</span></a>
								</li>
								
							</ul>
						</li>
						
						
						
						
						<li class="">
							<a href="/pages/xay-dung-cau-hinh" class="" aria-label="Xây dựng cấu hình">
								<img class="navIcon" width="32" height="32" src="https://theme.hstatic.net/200000420363/1001226108/14/icon_nav_4.png?v=139" alt="Xây dựng cấu hình"/>
								<span>Xây dựng cấu hình</span>
							</a>
						</li>
						
						
						
						
						<li class="">
							<a href="/pages/bao-hanh" class="" aria-label="Chính sách bảo hành">
								<img class="navIcon" width="32" height="32" src="https://theme.hstatic.net/200000420363/1001226108/14/icon_nav_5.png?v=139" alt="Chính sách bảo hành"/>
								<span>Chính sách bảo hành</span>
							</a>
						</li>
						
						
						
						
						<li class="">
							<a href="https://traucay.vn/" class="" aria-label="Thiết bị mining" rel="nofollow">
								<img class="navIcon" width="32" height="32" src="https://theme.hstatic.net/200000420363/1001226108/14/icon_nav_6.png?v=139" alt="Thiết bị mining"/>
								<span>Thiết bị mining</span>
							</a>
						</li>
						
						
					</ul>
				</div>
</header>
        </div>
        )
    }
}
export default Home;