import { LayoutEmail } from "../layout";

export const TestDriveEmail = (fieldsHTML: string) => {
    return LayoutEmail(`
        <p style="color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size: 20px;line-height:28px;font-weight: 700;">
            Datos de contacto
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;" >
            <tr>
                <td class="info" style="word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;padding-top:20px;padding-bottom:20px;padding-right:20px;padding-left:20px;border-radius:4px;background-color:#f4f7fa;" >
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;" >
                        ${fieldsHTML}
                    </table>
                </td>
            </tr>
        </table>
    `);
}