package com.mundoSenai.leads.service;

import com.mundoSenai.leads.model.M_Lead;
import com.mundoSenai.leads.model.M_Reposta;
import com.mundoSenai.leads.repository.R_Lead;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class S_Cadastro {
    private static R_Lead r_lead;

    public S_Cadastro(R_Lead r_lead){
        this.r_lead = r_lead;
    }

    public static M_Reposta cadastrarLead(String nome, String data_nascimento, String telefone, String email){
        boolean podeSalvar = true;
        String mensagem = "";
        boolean sucesso = false;

        if(nome.trim().equals("")){
            podeSalvar = false;
            mensagem += "O nome precisa ser preenchido!\n";
        }
        if(data_nascimento.trim().equals("")){
            podeSalvar = false;
            mensagem += "A data de nascimento precisa ser preenchida!\n";
        }
        if(telefone.trim().equals("") && email.trim().equals("")){
            podeSalvar = false;
            mensagem += "O telefone ou o email precisa ser preenchido!\n";
        }

        if(podeSalvar) {
            M_Lead m_lead = new M_Lead();
            m_lead.setNome(nome.trim());
            m_lead.setEmail(email.trim());
            m_lead.setTelefone(telefone.trim());
            try{
                m_lead.setData_nascimento(LocalDate.parse(data_nascimento));
                r_lead.save(m_lead);
                sucesso = true;
                mensagem += "Pessoa cadastrada com sucesso!";
            }catch (Exception e){
                mensagem += e.getMessage();
            }
        }
        return new M_Reposta(sucesso,mensagem);
    }
}
