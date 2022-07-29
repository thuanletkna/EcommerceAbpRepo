using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class addNews : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ParentId",
                table: "AppCategories");

            migrationBuilder.RenameColumn(
                name: "Level",
                table: "AppCategories",
                newName: "OrderIndex");

            migrationBuilder.AddColumn<bool>(
                name: "IsBlog",
                table: "AppCategories",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Slug",
                table: "AppCategories",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true);

            migrationBuilder.CreateTable(
                name: "AppNewses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Slug = table.Column<string>(type: "nvarchar(512)", maxLength: 512, nullable: true),
                    CategoryId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(512)", maxLength: 512, nullable: true),
                    Description = table.Column<string>(type: "nvarchar(2048)", maxLength: 2048, nullable: true),
                    Content = table.Column<string>(type: "ntext", nullable: true),
                    IsPublic = table.Column<bool>(type: "bit", nullable: false),
                    PublicDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Thumbnail = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    IsHighlight = table.Column<bool>(type: "bit", nullable: false),
                    HighlightIndex = table.Column<int>(type: "int", nullable: true),
                    View = table.Column<int>(type: "int", nullable: false),
                    IsHot = table.Column<bool>(type: "bit", nullable: false),
                    HotIndex = table.Column<int>(type: "int", nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppNewses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppNewses_AppCategories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "AppCategories",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AppTags",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Slug = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppTags", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppNewsTags",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NewsId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    TagId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppNewsTags", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppNewsTags_AppNewses_NewsId",
                        column: x => x.NewsId,
                        principalTable: "AppNewses",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AppNewsTags_AppTags_TagId",
                        column: x => x.TagId,
                        principalTable: "AppTags",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppNewses_CategoryId",
                table: "AppNewses",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_AppNewsTags_NewsId",
                table: "AppNewsTags",
                column: "NewsId");

            migrationBuilder.CreateIndex(
                name: "IX_AppNewsTags_TagId",
                table: "AppNewsTags",
                column: "TagId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppNewsTags");

            migrationBuilder.DropTable(
                name: "AppNewses");

            migrationBuilder.DropTable(
                name: "AppTags");

            migrationBuilder.DropColumn(
                name: "IsBlog",
                table: "AppCategories");

            migrationBuilder.DropColumn(
                name: "Slug",
                table: "AppCategories");

            migrationBuilder.RenameColumn(
                name: "OrderIndex",
                table: "AppCategories",
                newName: "Level");

            migrationBuilder.AddColumn<int>(
                name: "ParentId",
                table: "AppCategories",
                type: "int",
                nullable: true);
        }
    }
}
