using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class addBlogFile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppBlogFiles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    FileStorageId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    BlogId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppBlogFiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppBlogFiles_AppBlogs_BlogId",
                        column: x => x.BlogId,
                        principalTable: "AppBlogs",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AppBlogFiles_AppFileStorages_FileStorageId",
                        column: x => x.FileStorageId,
                        principalTable: "AppFileStorages",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AppBlogFiles_AppProducts_ProductId",
                        column: x => x.ProductId,
                        principalTable: "AppProducts",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppBlogFiles_BlogId",
                table: "AppBlogFiles",
                column: "BlogId");

            migrationBuilder.CreateIndex(
                name: "IX_AppBlogFiles_FileStorageId",
                table: "AppBlogFiles",
                column: "FileStorageId");

            migrationBuilder.CreateIndex(
                name: "IX_AppBlogFiles_ProductId",
                table: "AppBlogFiles",
                column: "ProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppBlogFiles");
        }
    }
}
