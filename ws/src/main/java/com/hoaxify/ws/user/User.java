package com.hoaxify.ws.user;

import com.fasterxml.jackson.annotation.JsonView;
import com.hoaxify.ws.user.shared.Views;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue
    private long id;


    @NotBlank(message = "{hoaxify.constraint.username.NotBlank.message}")
    @Size(min=4, max=255 )
    @Column(unique = true)
    @UniqueUsername
    @JsonView(Views.Base.class)
    private String username;

    @NotBlank
    @Size(min=4, max=255 )
    @JsonView(Views.Base.class)
    private String displayName;

    @NotBlank
    @Size(min=8, max=255 )
    @Pattern(regexp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "{hoaxify.constraint.password.Pattern.message}")
    @JsonView(Views.Sensitive.class)
    private String password;

    @JsonView(Views.Base.class)
    private  String image;

}
