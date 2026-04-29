using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReimbursementPortal.Properties.Models;

[Table("usersTb")]
public class User
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("name")]
    public string Name { get; set; } = string.Empty;

    [Column("email")]
    public string Email { get; set; } = string.Empty;

    [Column("password")]
    public string Password { get; set; } = string.Empty;

    [Column("role")]
    public string Role { get; set; } = string.Empty; // Employee or Manager

    [Column("managerId")]
    public int? ManagerId { get; set; }  
}
