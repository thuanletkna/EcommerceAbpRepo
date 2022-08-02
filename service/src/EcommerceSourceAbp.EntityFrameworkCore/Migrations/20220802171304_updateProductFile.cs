using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class updateProductFile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppProducts_AppFileStorages_FileStorageId",
                table: "AppProducts");

            migrationBuilder.DropIndex(
                name: "IX_AppProducts_FileStorageId",
                table: "AppProducts");

            migrationBuilder.DropColumn(
                name: "FileStorageId",
                table: "AppProducts");

            migrationBuilder.CreateTable(
                name: "ProductFile",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    FileStorageId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductFile", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductFile_AppFileStorages_FileStorageId",
                        column: x => x.FileStorageId,
                        principalTable: "AppFileStorages",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ProductFile_AppProducts_ProductId",
                        column: x => x.ProductId,
                        principalTable: "AppProducts",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProductFile_FileStorageId",
                table: "ProductFile",
                column: "FileStorageId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductFile_ProductId",
                table: "ProductFile",
                column: "ProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductFile");

            migrationBuilder.AddColumn<Guid>(
                name: "FileStorageId",
                table: "AppProducts",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppProducts_FileStorageId",
                table: "AppProducts",
                column: "FileStorageId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppProducts_AppFileStorages_FileStorageId",
                table: "AppProducts",
                column: "FileStorageId",
                principalTable: "AppFileStorages",
                principalColumn: "Id");
        }
    }
}
