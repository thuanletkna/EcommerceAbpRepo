using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class addProductFile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductFile_AppFileStorages_FileStorageId",
                table: "ProductFile");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductFile_AppProducts_ProductId",
                table: "ProductFile");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductFile",
                table: "ProductFile");

            migrationBuilder.RenameTable(
                name: "ProductFile",
                newName: "AppProductFiles");

            migrationBuilder.RenameIndex(
                name: "IX_ProductFile_ProductId",
                table: "AppProductFiles",
                newName: "IX_AppProductFiles_ProductId");

            migrationBuilder.RenameIndex(
                name: "IX_ProductFile_FileStorageId",
                table: "AppProductFiles",
                newName: "IX_AppProductFiles_FileStorageId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AppProductFiles",
                table: "AppProductFiles",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AppProductFiles_AppFileStorages_FileStorageId",
                table: "AppProductFiles",
                column: "FileStorageId",
                principalTable: "AppFileStorages",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AppProductFiles_AppProducts_ProductId",
                table: "AppProductFiles",
                column: "ProductId",
                principalTable: "AppProducts",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppProductFiles_AppFileStorages_FileStorageId",
                table: "AppProductFiles");

            migrationBuilder.DropForeignKey(
                name: "FK_AppProductFiles_AppProducts_ProductId",
                table: "AppProductFiles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AppProductFiles",
                table: "AppProductFiles");

            migrationBuilder.RenameTable(
                name: "AppProductFiles",
                newName: "ProductFile");

            migrationBuilder.RenameIndex(
                name: "IX_AppProductFiles_ProductId",
                table: "ProductFile",
                newName: "IX_ProductFile_ProductId");

            migrationBuilder.RenameIndex(
                name: "IX_AppProductFiles_FileStorageId",
                table: "ProductFile",
                newName: "IX_ProductFile_FileStorageId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductFile",
                table: "ProductFile",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductFile_AppFileStorages_FileStorageId",
                table: "ProductFile",
                column: "FileStorageId",
                principalTable: "AppFileStorages",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductFile_AppProducts_ProductId",
                table: "ProductFile",
                column: "ProductId",
                principalTable: "AppProducts",
                principalColumn: "Id");
        }
    }
}
