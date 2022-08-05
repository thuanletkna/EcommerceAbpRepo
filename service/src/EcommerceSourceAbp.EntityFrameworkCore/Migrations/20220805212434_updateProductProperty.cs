using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class updateProductProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.RenameColumn(
                name: "ProductTypeId",
                table: "AppProducts",
                newName: "ProductPropertyId");

            migrationBuilder.CreateIndex(
                name: "IX_AppProducts_ProductPropertyId",
                table: "AppProducts",
                column: "ProductPropertyId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppProducts_AppProductProperties_ProductPropertyId",
                table: "AppProducts",
                column: "ProductPropertyId",
                principalTable: "AppProductProperties",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppProducts_AppProductProperties_ProductPropertyId",
                table: "AppProducts");

            migrationBuilder.DropIndex(
                name: "IX_AppProducts_ProductPropertyId",
                table: "AppProducts");

            migrationBuilder.RenameColumn(
                name: "ProductPropertyId",
                table: "AppProducts",
                newName: "ProductTypeId");

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
    }
}
