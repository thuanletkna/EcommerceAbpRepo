import { Component, Injector, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { AppBaseComponent } from '../../app-base.component';
import { blogIcon, newsIcon } from '../../consts/item-custem';
@Component({
    selector: 'ft-aside',
    templateUrl: './aside.component.html',
})
export class AsideComponent extends AppBaseComponent implements OnInit {
    menus = [
        {
            level: 1,
            title: 'Trang chủ',
            icon: 'home',
            selected: false,
            route: '/',
            isPermission: true,
        },
        {
            level: 1,
            title: 'Tài khoản',
            icon: 'user',
            selected: false,
            open: false,
            isPermission:
                this.getGrantedPolicy('AbpIdentity.Users') ||
                this.getGrantedPolicy('AbpIdentity.Roles'),
            children: [
                {
                    level: 2,
                    title: 'Quản lý người dùng',
                    icon: 'user',
                    selected: false,
                    route: '/user',
                    isPermission: this.getGrantedPolicy('AbpIdentity.Users'),
                },
                {
                    level: 2,
                    title: 'Vai trò',
                    icon: 'check',
                    selected: false,
                    route: '/role',
                    isPermission: this.getGrantedPolicy('AbpIdentity.Roles'),
                },
            ],
        },
        {
            level: 1,
            title: 'Sản phẩm',
            icon: 'project',
            selected: false,
            open: false,
            isPermission:
                this.getGrantedPolicy('Murad.ProductCategory') ||
                this.getGrantedPolicy('Murad.Product'),
            children: [
                {
                    level: 1,
                    title: 'Danh mục',
                    icon: 'unordered-list',
                    selected: false,
                    route: '/product-category',
                    isPermission: this.getGrantedPolicy('Murad.ProductCategory'),
                },
                {
                    level: 1,
                    title: 'Sản phẩm',
                    icon: 'project',
                    selected: false,
                    route: '/products',
                    isPermission: this.getGrantedPolicy('Murad.Product'),
                },
            ],
        },
        {
            level: 1,
            title: 'Tin tức',
            icon: 'ng-zorro:news',
            selected: false,
            open: false,
            isPermission:
                this.getGrantedPolicy('Murad.Category') || this.getGrantedPolicy('Murad.News'),
            children: [
                {
                    level: 1,
                    title: 'Chuyên mục',
                    icon: 'unordered-list',
                    selected: false,
                    route: '/news-category',
                    isPermission: this.getGrantedPolicy('Murad.Category'),
                },
                {
                    level: 1,
                    title: 'Tin tức',
                    icon: 'ng-zorro:news',
                    selected: false,
                    route: '/news',
                    isPermission: this.getGrantedPolicy('Murad.News'),
                },
            ],
        },
        {
            level: 1,
            title: 'Blog',
            icon: 'ng-zorro:blog',
            selected: false,
            open: false,
            isPermission:
                this.getGrantedPolicy('Murad.Category') || this.getGrantedPolicy('Murad.News'),
            children: [
                {
                    level: 1,
                    title: 'Chuyên mục',
                    icon: 'unordered-list',
                    selected: false,
                    route: '/blog-category',
                    isPermission: this.getGrantedPolicy('Murad.Category'),
                },
                {
                    level: 1,
                    title: 'Blog',
                    icon: 'ng-zorro:blog',
                    selected: false,
                    route: '/blog',
                    isPermission: this.getGrantedPolicy('Murad.Category'),
                },
            ],
        },
        {
            level: 1,
            title: 'khuyến mãi',
            icon: 'percentage',
            selected: false,
            route: '/promotion',
            isPermission: this.getGrantedPolicy('Murad.Promotion'),
        },
        {
            level: 1,
            title: 'Đơn hàng',
            icon: 'file-protect',
            selected: false,
            // route: '/order',
            isPermission: this.getGrantedPolicy('Murad.Order'),
            children: [
                {
                    level: 1,
                    title: 'Đơn thường',
                    icon: 'file-protect',
                    selected: false,
                    route: '/order/normal',
                    isPermission: this.getGrantedPolicy('Murad.Order'),
                },
                {
                    level: 1,
                    title: 'Đơn preorder',
                    icon: 'file-protect',
                    selected: false,
                    route: '/order/preorder',
                    isPermission: this.getGrantedPolicy('Murad.Order'),
                },
                {
                    level: 1,
                    title: 'Đơn quà',
                    icon: 'file-protect',
                    selected: false,
                    route: '/order/gift',
                    isPermission: this.getGrantedPolicy('Murad.Order'),
                },
            ]
        },
        {
            level: 1,
            title: 'Đổi thưởng',
            icon: 'dollar-circle',
            selected: false,
            route: '/reward',
            isPermission: this.getGrantedPolicy('Murad.Reward'),
        },
        {
            level: 1,
            title: 'Tồn kho',
            icon: 'stock',
            selected: false,
            open: false,
            isPermission:
                this.getGrantedPolicy('Murad.ProductInventory') ||
                this.getGrantedPolicy('Murad.ProductIssue'),
            children: [
                {
                    level: 1,
                    title: 'Lịch sử nhập kho',
                    icon: 'history',
                    selected: false,
                    route: '/product-issue',
                    isPermission: this.getGrantedPolicy('Murad.ProductIssue'),
                },
                {
                    level: 1,
                    title: 'Tồn kho',
                    icon: 'stock',
                    selected: false,
                    route: '/product-inventory',
                    isPermission: this.getGrantedPolicy('Murad.ProductInventory'),
                },
            ],
        },

        {
            level: 1,
            title: 'Khách hàng',
            icon: 'user',
            selected: false,
            route: '/customer',
            isPermission: this.getGrantedPolicy('Murad.ECommerceProfile'),
        },
        {
            level: 1,
            title: 'Thông tin liên hệ',
            icon: 'contacts',
            selected: false,
            route: '/customer-contact',
            isPermission: this.getGrantedPolicy('Murad.CustomerContact'),
        },
        {
            level: 1,
            title: 'FAQ',
            icon: 'question-circle',
            selected: false,
            route: '/faq',
            isPermission: this.getGrantedPolicy('Murad.Faq'),
        },
        {
            level: 1,
            title: 'Siêu âm da',
            icon: 'question-circle',
            selected: false,
            route: '/skin-ultrasound',
            isPermission: this.getGrantedPolicy('Murad.SkinUltrasound'),
        },
        {
            level: 1,
            title: 'Đại lý',
            icon: 'branches',
            selected: false,
            route: '/branch',
            isPermission: this.getGrantedPolicy('Murad.Branch'),
        },
        {
            level: 1,
            title: 'Giải pháp',
            icon: 'solution',
            selected: false,
            route: '/solution',
            isPermission: this.getGrantedPolicy('Murad.Solution'),
        },
        {
            level: 1,
            title: 'Banner',
            icon: 'bg-colors',
            selected: false,
            route: '/banner',
            isPermission: this.getGrantedPolicy('Murad.Banner'),
        },
        // {
        //     level: 1,
        //     title: 'Kho',
        //     icon: 'hdd',
        //     selected: false,
        //     route: '/warehouse',
        //     isPermission: this.getGrantedPolicy('Murad.Warehouse'),
        // },
        {
            level: 1,
            title: 'Cấu hình hệ thống',
            icon: 'setting',
            selected: false,
            route: '/system-setting',
            isPermission: this.getGrantedPolicy('Murad.SystemSetting'),
        },
        {
            level: 1,
            title: 'Báo cáo doanh thu',
            icon: 'bar-chart',
            selected: false,
            route: '/turnover-report',
            isPermission: true,
        },
    ];
    constructor(protected readonly injector: Injector, private iconService: NzIconService) {
        super(injector);
        this.iconService.addIconLiteral('ng-zorro:blog', blogIcon);
        this.iconService.addIconLiteral('ng-zorro:news', newsIcon);
    }

    ngOnInit(): void {}

    initMenu(isCollapsed: boolean) {
        this.selectMenu(this.menus, null, isCollapsed);
    }

    selectMenu(menus, parent?, isCollapsed?) {
        const pathname = window.location.pathname;
        menus.forEach((element) => {
            if (element.route === pathname) {
                element.selected = true;
                if (parent) {
                    parent.open = !isCollapsed;
                }
            }
            if (element.route !== pathname) {
                element.selected = false;
                element.open = false;
            }
            if (element.children) {
                this.selectMenu(element.children, element, isCollapsed);
            }
        });
    }

    onClickMenu(menu) {
        if (menu?.children?.length) {
            if (menu.children.find((v) => v.route === window.location.pathname)) {
                return;
            }
            const path = menu.children.find((v) => v.isPermission === true)?.route;
            if (path) {
                this.redirectTo(path);
            }
        }
    }
}
