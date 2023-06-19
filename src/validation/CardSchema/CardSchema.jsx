

import * as Yup from "yup";

const CardSchema = Yup.object().shape({
    groupid: Yup.string(),
    groupname: Yup.string()
        .max(12, "max 12 characters")
        .min(4, "minimum 5 characters")
        .required(" Required Group name "),
    groupdescription: Yup.string().max(
        300,
        "  max 300 characters"
    ),

    groupimg: Yup.mixed(),

    cards: Yup.array().of(
        Yup.object().shape({
            cardid: Yup.string(),
            cardname: Yup.string()
                .max(20, "max 20 characters")
                .min(4, "minimum 5 characters")
                .required(" Input Required !"),
            carddefination: Yup.string()
                .min(20, "min 20 characters")
                .max(300, " max 300 characters")
                .required(" Required card defination"),
        })
    ),
    createdOn: Yup.date().default(() => new Date()),
});



export default CardSchema