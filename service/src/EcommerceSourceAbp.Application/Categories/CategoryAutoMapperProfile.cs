using AutoMapper;
using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Categories.Dtos;

namespace EcommerceSourceAbp.Categories
{
    public class CategoryAutoMapperProfile : Profile
    {
        public CategoryAutoMapperProfile()
        {
            CreateMap<CreateUpdateCategoryDto, Category>(MemberList.None);
            CreateMap<Category, GetCategoryForEditDto>(MemberList.None);
            CreateMap<Category, GetCategoryForViewDto>(MemberList.None);
            CreateMap<Category, CategoryDto>(MemberList.None);
            CreateMap<Category, CreateUpdateCategoryDto>(MemberList.None);
        }
    }
}
