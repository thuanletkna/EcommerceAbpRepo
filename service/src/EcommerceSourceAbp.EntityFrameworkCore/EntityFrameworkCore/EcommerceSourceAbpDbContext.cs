using EcommerceSourceAbp.Entities;
using EcommerceSourceAbp.Users;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.IdentityServer.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement;
using Volo.Abp.TenantManagement.EntityFrameworkCore;

namespace EcommerceSourceAbp.EntityFrameworkCore;

[ReplaceDbContext(typeof(IIdentityDbContext))]
[ReplaceDbContext(typeof(ITenantManagementDbContext))]
[ConnectionStringName("Default")]
public class EcommerceSourceAbpDbContext :
    AbpDbContext<EcommerceSourceAbpDbContext>,
    IIdentityDbContext,
    ITenantManagementDbContext
{
    /* Add DbSet properties for your Aggregate Roots / Entities here. */

    #region Entities from the modules

    /* Notice: We only implemented IIdentityDbContext and ITenantManagementDbContext
     * and replaced them for this DbContext. This allows you to perform JOIN
     * queries for the entities of these modules over the repositories easily. You
     * typically don't need that for other modules. But, if you need, you can
     * implement the DbContext interface of the needed module and use ReplaceDbContext
     * attribute just like IIdentityDbContext and ITenantManagementDbContext.
     *
     * More info: Replacing a DbContext of a module ensures that the related module
     * uses this DbContext on runtime. Otherwise, it will use its own DbContext class.
     */

    //Identity
    public DbSet<IdentityUser> Users { get; set; }
    public DbSet<IdentityRole> Roles { get; set; }
    public DbSet<IdentityClaimType> ClaimTypes { get; set; }
    public DbSet<OrganizationUnit> OrganizationUnits { get; set; }
    public DbSet<IdentitySecurityLog> SecurityLogs { get; set; }
    public DbSet<IdentityLinkUser> LinkUsers { get; set; }

    // Tenant Management
    public DbSet<Tenant> Tenants { get; set; }
    public DbSet<TenantConnectionString> TenantConnectionStrings { get; set; }

    #endregion
    public DbSet<Category> Categories { get; set; }
    public DbSet<News> Newses { get; set; }
    public DbSet<Tag> Tags { get; set; }
    public DbSet<NewsTag> NewsTags { get; set; }
    public DbSet<ECommerceProfile> ECommerceProfiles { get; set; }
    public DbSet<PasswordReset> PasswordResets { get; set; }
    public DbSet<Province> Provinces { get; set; }
    public DbSet<Ward> Wards { get; set; }
    public DbSet<District> Districts { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<ProductType> ProductTypes { get; set; }
    public DbSet<FileStorage> FileStorages { get; set; }
    public DbSet<ProductFile> ProductFiles { get; set; }
    public DbSet<TradeMark> TradeMarks { get; set; }
    public DbSet<ProductProperty> ProductProperties { get; set; }
    public DbSet<SubProductProperty> SubProductProperties { get; set; }
    public DbSet<AppUser> AppUsers { get; set; }
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<BlogFile> BlogFiles { get; set; }
    public DbSet<ProductAffilate> ProductAffilates { get; set; }
    public DbSet<BlogDetail> BlogDetails { get; set; }
    public DbSet<ImageSetting> ImageSettings { get; set; }
    public DbSet<HomePageConfig> HomePageConfigs { get; set; }
    public EcommerceSourceAbpDbContext(DbContextOptions<EcommerceSourceAbpDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /* Include modules to your migration db context */

        builder.ConfigurePermissionManagement();
        builder.ConfigureSettingManagement();
        builder.ConfigureBackgroundJobs();
        builder.ConfigureAuditLogging();
        builder.ConfigureIdentity();
        builder.ConfigureIdentityServer();
        builder.ConfigureFeatureManagement();
        builder.ConfigureTenantManagement();

        /* Configure your own tables/entities inside here */

        //builder.Entity<YourEntity>(b =>
        //{
        //    b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "YourEntities", EcommerceSourceAbpConsts.DbSchema);
        //    b.ConfigureByConvention(); //auto configure for the base class props
        //    //...
        //});
        builder.Entity<Category>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "Categories", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<News>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "Newses", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<NewsTag>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "NewsTags", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<Tag>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "Tags", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<MetaSeo>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "MetaSeos", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<ECommerceProfile>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "ECommerceProfiles", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<Ward>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "Wards", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<Province>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "Provinces", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<District>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "Districts", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<AppUser>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "AppUsers", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<Product>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "Products", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<FileStorage>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "FileStorages", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<ProductType>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "ProductTypes", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<ProductFile>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "ProductFiles", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<TradeMark>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "TradeMarks", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<ProductProperty>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "ProductProperties", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<SubProductProperty>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "SubProductProperties", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<ProductAffilate>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "ProductAffilates", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<Blog>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "Blogs", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<BlogDetail>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "BlogDetails", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<BlogFile>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "BlogFiles", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<ImageSetting>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "ImageSettings", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
        builder.Entity<HomePageConfig>(b =>
        {
            b.ToTable(EcommerceSourceAbpConsts.DbTablePrefix + "HomePageConfigs", EcommerceSourceAbpConsts.DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
        });
    }
}
