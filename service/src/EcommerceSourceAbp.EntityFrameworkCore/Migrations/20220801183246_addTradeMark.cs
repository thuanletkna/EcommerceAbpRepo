using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EcommerceSourceAbp.Migrations
{
    public partial class addTradeMark : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TradeMark",
                table: "AppProducts");

            migrationBuilder.AddColumn<Guid>(
                name: "TradeMarkId",
                table: "AppProducts",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "AppTradeMarks",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FileStorageId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
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
                    table.PrimaryKey("PK_AppTradeMarks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppTradeMarks_AppFileStorages_FileStorageId",
                        column: x => x.FileStorageId,
                        principalTable: "AppFileStorages",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppProducts_TradeMarkId",
                table: "AppProducts",
                column: "TradeMarkId");

            migrationBuilder.CreateIndex(
                name: "IX_AppTradeMarks_FileStorageId",
                table: "AppTradeMarks",
                column: "FileStorageId");

            migrationBuilder.AddForeignKey(
                name: "FK_AppProducts_AppTradeMarks_TradeMarkId",
                table: "AppProducts",
                column: "TradeMarkId",
                principalTable: "AppTradeMarks",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppProducts_AppTradeMarks_TradeMarkId",
                table: "AppProducts");

            migrationBuilder.DropTable(
                name: "AppTradeMarks");

            migrationBuilder.DropIndex(
                name: "IX_AppProducts_TradeMarkId",
                table: "AppProducts");

            migrationBuilder.DropColumn(
                name: "TradeMarkId",
                table: "AppProducts");

            migrationBuilder.AddColumn<string>(
                name: "TradeMark",
                table: "AppProducts",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
