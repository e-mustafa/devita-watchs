"use client";
import React, { useContext } from "react";
import {
	Box,
	Container,
	Stack,
	Typography,
	OutlinedInput,
	Button,
	Divider,
} from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";

import Link from "next/link";
import Image from "next/image";

import logoImg from "@/images/logo.png";
import logoImgDark from "@/images/logo-6.png";
import fotterImg from "@/images/footer-img.jpg";
import SocialLinks from "./Helpers/SocialLinks";
import { navItems } from "@/utility/data";
import { Store } from "@/context/Store";

function Footer() {
	const { state } = useContext(Store);
	const { isDarkMode } = state;

	return (
		<Box
			mt={8}
			component="footer"
			bgcolor="action.selected"
			// color="whitesmoke"
			sx={{
				background: isDarkMode
					? "url(/assist/images/footer-img.jpg) center fixed"
					: "",
				backgroundSize: "cover",
			}}
		>
			<Container>
				<Stack width="80%" mx="auto" my={5} py={5}>
					<Grid
						container
						border="1px solid gray"
						py="20px"
						// gap={2}
						textAlign="center"
						bgcolor="action.selected"
					>
						<Grid xs={12} md={4}>
							<Typography variant="h6">Free Shipping</Typography>
							<Typography variant="body2">
								Free shipping on all order
							</Typography>
							<Divider
								sx={{
									display: { xs: "block", md: "none" },
									width: "50%",
									mx: "auto",
									my: 2,
								}}
							/>
						</Grid>

						<Grid
							xs={12}
							md={4}
							borderLeft="1px solid gray"
							borderRight="1px solid gray"
						>
							<Typography variant="h6">Money Return</Typography>
							<Typography variant="body2">
								30 days for free return
							</Typography>
							<Divider
								sx={{
									display: { xs: "block", md: "none" },
									width: "50%",
									mx: "auto",
									my: 2,
								}}
							/>
						</Grid>

						<Grid xs={12} md={4}>
							<Typography variant="h6">Online Support</Typography>
							<Typography variant="body2">
								Support 24 hours a day
							</Typography>
						</Grid>
					</Grid>
				</Stack>

				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					textAlign={{ xs: "center", md: "start" }}
				>
					<Grid xs={12} sm={6} md={4}>
						<Box>
							<Image
								src={isDarkMode ? logoImg : logoImgDark}
								alt="Divita"
								className="images"
							/>
							<Typography variant="subtitle2">
								Lorem ipsum dolor sit amet, consectetur adipisicing
								elit. Pariatur, dolore tempora aliquam atque voluptas
								quaerat blanditiis.
							</Typography>
						</Box>
					</Grid>

					<Grid xs={12} sm={6} md={3}>
						<Box>
							<Stack component="ul" my={{ xs: 5, md: 0 }}>
								{navItems &&
									navItems.map((k, i) => (
										<Typography
											key={i + k}
											component={Link}
											href={k.href}
											variant="h6"
										>
											{k.label}
										</Typography>
									))}
							</Stack>
						</Box>
					</Grid>

					<Grid xs={12} md={5}>
						<Box>
							<Typography variant="h5">
								{" "}
								Subscribe for Newsletter{" "}
							</Typography>
							<Typography variant="caption">
								Get our updates and special offers.
							</Typography>
							<Stack direction="row" my={2}>
								<OutlinedInput
									sx={{
										borderRadius: "4px 0 0 4px",
										borderColor: "GrayText",
										flexGrow: 1,
									}}
									id="subscribe-email"
									aria-label="email"
									placeholder="Enter Your email..."
								/>
								<Button
									variant="contained"
									sx={{ borderRadius: "0 4px 4px 0" }}
									type="submit"
								>
									subscribe
								</Button>
							</Stack>
							{/* SocialLinks component ------------------------------ */}
							<SocialLinks />
						</Box>
					</Grid>
				</Grid>
				<Divider sx={{ mt: 3 }} />
				{/* Copyright --------------------------------------- */}
				<Stack py={2}>
					<Typography variant="body1" color="gray" textAlign="center">
						Copyright © Devita. All Right Reserved.
						{new Date().getFullYear()} Developed by{" "}
						<Link
							href="https://e-mustafa.github.io/portfolio/"
							target="_blank"
							style={{ textDecoration: "underline" }}
						>
							Mustafa Abutabl
						</Link>
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
}
export default React.memo(Footer);
