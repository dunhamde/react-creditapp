export const FETCH_CREDIT_REQS = "FETCH_CREDIT_REQS";
export const SHOW_CREDIT_HEALTH = "SHOW_CREDIT_HEALTH";
export const SHOW_TERM_LOAN = "SHOW_TERM_LOAN";

export const fetchCreditReqs = () => ({
  type: FETCH_CREDIT_REQS
});

export const showCreditHealth = () => ({
  type: SHOW_CREDIT_HEALTH
});

export const showTermLoan = () => ({
    type: SHOW_TERM_LOAN
});


export function showCreditHealthView() {
    return showCreditHealth();
}

export function showTermLoanView() {
    return showTermLoan();
}


