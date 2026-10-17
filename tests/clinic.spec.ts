import {test,expect} from "@playwright/test";
import { loginClinic } from "../helpers/auth";

test.beforeEach(async({page})=>{
    await loginClinic(page);
});


test.describe("Verificando fluxo completo de agendamento", () => {
    
    test("verificando o link de redirecionamento para a clinica está funcionando", async ({ page }) => {
       await page.getByRole('link', { name: 'open the clinic app' }).click();
       await expect(page).toHaveURL(/clinic/);
       
        
    });

});