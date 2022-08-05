using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class updateProductType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppProducts_AppProductTypes_ProductTypeId",
                table: "AppProducts");

            migrationBuilder.DropIndex(
                name: "IX_AppProducts_ProductTypeId",
                table: "AppProducts");

            migrationBuilder.AddColumn<Guid>(
                name: "ProductPropertiesId",
                table: "AppProducts",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppProducts_ProductPropertiesId",
                table: "AppProducts",
                column: "ProductPropertiesId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppProducts_AppProductProperties_ProductPropertiesId",
                table: "AppProducts",
                column: "ProductPropertiesId",
                principalTable: "AppProductProperties",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppProducts_AppProductProperties_ProductPropertiesId",
                table: "AppProducts");

            migrationBuilder.DropIndex(
                name: "IX_AppProducts_ProductPropertiesId",
                table: "AppProducts");

            migrationBuilder.DropColumn(
                name: "ProductPropertiesId",
                table: "AppProducts");

            migrationBuilder.CreateIndex(
                name: "IX_AppProducts_ProductTypeId",
                table: "AppProducts",
                column: "ProductTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppProducts_AppProductTypes_ProductTypeId",
                table: "AppProducts",
                column: "ProductTypeId",
                principalTable: "AppProductTypes",
                principalColumn: "Id");
        }
    }
}
