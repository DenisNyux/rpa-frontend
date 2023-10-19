export default function removeExtension(docname: string) {
    const separatedDocname = docname.split('.');
    return separatedDocname.splice(0, separatedDocname.length - 1);
}