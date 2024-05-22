package com.mundoSenai.leads.repository;

import com.mundoSenai.leads.model.M_Lead;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface R_Lead extends JpaRepository<M_Lead, Long> {
}
