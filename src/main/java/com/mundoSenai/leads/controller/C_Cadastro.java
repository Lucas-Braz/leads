package com.mundoSenai.leads.controller;

import com.mundoSenai.leads.model.M_Reposta;
import com.mundoSenai.leads.service.S_Cadastro;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class C_Cadastro {
    @PostMapping("/cadLead")
    @ResponseBody
    public M_Reposta cadastrarLead(@RequestParam("nome") String nome,
                                   @RequestParam("data_nascimento") String data_nascimento,
                                   @RequestParam(value = "telefone", required = false) String telefone,
                                   @RequestParam(value = "email", required = false) String email){
        return S_Cadastro.cadastrarLead(nome,data_nascimento,telefone,email);
    }
}
