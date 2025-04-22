import { Button, Modal as NextUIModal, ModalBody, ModalContent, ModalFooter, ModalHeader, Image } from "@nextui-org/react";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    content?: ModalContent
}

type ModalContent = {
    title: string
    description?: string
    tools?: string
    link?: string
    images?: [string]
}
export const Modal = ({ isOpen = false, onClose = () => { }, content }: ModalProps) => {
    return (
        <NextUIModal isOpen={isOpen} size={"4xl"} onClose={onClose} placement="center" backdrop="blur" scrollBehavior="inside">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{content?.title}</ModalHeader>
                        <ModalBody>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    {content?.images ? (
                                        content?.images.map((image, index) => (
                                            <Image
                                                key={index}
                                                alt={content?.title}
                                                className="w-full object-cover h-[300px]"
                                                radius="lg"
                                                shadow="sm"
                                                src={image}
                                                width="100%"
                                            />
                                        ))
                                    ) : (
                                        <Image
                                            alt={content?.title}
                                            className="w-full object-cover h-[300px]"
                                            radius="lg"
                                            shadow="sm"
                                            src="/img/default.jpg"
                                            width="100%"
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col gap-2">
                                    {content?.description && (
                                        <>
                                            <h6 className="text-sm text-default-600">Deskripsi</h6>
                                            <p className="text-sm text-default-400 text-justify">{content?.description}</p>
                                        </>
                                    )}
                                    {content?.tools && (
                                        <>
                                            <h6 className="text-sm text-default-600">Tools</h6>
                                            <p className="text-sm text-default-400 text-justify">{content?.tools}</p>
                                        </>
                                    )}
                                    {content?.link && (
                                        <>
                                            <h6 className="text-sm text-default-600">Link</h6>
                                            <a href={content?.link} target="_blank" className="text-sm text-default-400 hover:text-primary">{content?.link}</a>
                                        </>
                                    )}
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Tutup
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </NextUIModal >
    )
}