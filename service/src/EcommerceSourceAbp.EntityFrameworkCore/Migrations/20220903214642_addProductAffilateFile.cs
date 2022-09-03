using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class addProductAffilateFile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ProductAffilateId",
                table: "AppBlogFiles",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "AppProductAffilateFiles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductAffilateId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    FileStorageId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppProductAffilateFiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppProductAffilateFiles_AppFileStorages_FileStorageId",
                        column: x => x.FileStorageId,
                        principalTable: "AppFileStorages",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AppProductAffilateFiles_AppProductAffilates_ProductAffilateId",
                        column: x => x.ProductAffilateId,
                        principalTable: "AppProductAffilates",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppBlogFiles_ProductAffilateId",
                table: "AppBlogFiles",
                column: "ProductAffilateId");

            migrationBuilder.CreateIndex(
                name: "IX_AppProductAffilateFiles_FileStorageId",
                table: "AppProductAffilateFiles",
                column: "FileStorageId");

            migrationBuilder.CreateIndex(
                name: "IX_AppProductAffilateFiles_ProductAffilateId",
                table: "AppProductAffilateFiles",
                column: "ProductAffilateId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppBlogFiles_AppProductAffilates_ProductAffilateId",
                table: "AppBlogFiles",
                column: "ProductAffilateId",
                principalTable: "AppProductAffilates",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppBlogFiles_AppProductAffilates_ProductAffilateId",
                table: "AppBlogFiles");

            migrationBuilder.DropTable(
                name: "AppProductAffilateFiles");

            migrationBuilder.DropIndex(
                name: "IX_AppBlogFiles_ProductAffilateId",
                table: "AppBlogFiles");

            migrationBuilder.DropColumn(
                name: "ProductAffilateId",
                table: "AppBlogFiles");
        }
    }
}
