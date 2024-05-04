import nodemailer from 'nodemailer';

export const Notification = {
    WELCOME: 'WELCOME',
    CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
    LOWEST_PRICE: 'LOWEST_PRICE',
    THRESHOLD_MET: 'THRESHOLD_MET',
}

export async function generateEmailBody(product: EmailProductInfo, type: NotificationType) {
    // Shorten the product title
    const shortenedTitle = product.title.length > 20? `${product.title.substring(0, 20)}...`: product.title;

    let subject = "";
    let body = "";
}