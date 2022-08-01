using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class addProductType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "View",
                table: "AppProducts",
                newName: "ViewCount");

            migrationBuilder.AddColumn<Guid>(
                name: "FileStorageId",
                table: "AppProducts",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "NumberOfReview",
                table: "AppProducts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ProductCode",
                table: "AppProducts",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ProductTypeId",
                table: "AppProducts",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "StarRating",
                table: "AppProducts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "TradeMark",
                table: "AppProducts",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "AppProductTypes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    OrderIndex = table.Column<int>(type: "int", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Code = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppProductTypes", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppProducts_FileStorageId",
                table: "AppProducts",
                column: "FileStorageId");

            migrationBuilder.CreateIndex(
                name: "IX_AppProducts_ProductTypeId",
                table: "AppProducts",
                column: "ProductTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppProducts_AppFileStorages_FileStorageId",
                table: "AppProducts",
                column: "FileStorageId",
                principalTable: "AppFileStorages",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_AppProducts_AppProductTypes_ProductTypeId",
                table: "AppProducts",
                column: "ProductTypeId",
                principalTable: "AppProductTypes",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppProducts_AppFileStorages_FileStorageId",
                table: "AppProducts");

            migrationBuilder.DropForeignKey(
                name: "FK_AppProducts_AppProductTypes_ProductTypeId",
                table: "AppProducts");

            migrationBuilder.DropTable(
                name: "AppProductTypes");

            migrationBuilder.DropIndex(
                name: "IX_AppProducts_FileStorageId",
                table: "AppProducts");

            migrationBuilder.DropIndex(
                name: "IX_AppProducts_ProductTypeId",
                table: "AppProducts");

            migrationBuilder.DropColumn(
                name: "FileStorageId",
                table: "AppProducts");

            migrationBuilder.DropColumn(
                name: "NumberOfReview",
                table: "AppProducts");

            migrationBuilder.DropColumn(
                name: "ProductCode",
                table: "AppProducts");

            migrationBuilder.DropColumn(
                name: "ProductTypeId",
                table: "AppProducts");

            migrationBuilder.DropColumn(
                name: "StarRating",
                table: "AppProducts");

            migrationBuilder.DropColumn(
                name: "TradeMark",
                table: "AppProducts");

            migrationBuilder.RenameColumn(
                name: "ViewCount",
                table: "AppProducts",
                newName: "View");
        }
    }
}
