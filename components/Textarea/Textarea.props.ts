import { DetailedHTMLProps, TextareaHTMLAttributes, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';


export interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	error?: FieldError;
}