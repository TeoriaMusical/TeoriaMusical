export default function randomNumber(min_value, max_value) {

    let random_Number = Math.random() * (max_value - min_value) + min_value;

    return Math.floor(random_Number);
}