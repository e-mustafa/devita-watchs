import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
  Tooltip,
} from "@mui/material";

import { ShoppingBag } from "@mui/icons-material";
import { FaTrashAlt } from "react-icons/fa";

import Image from "next/image";
import image_1 from "../images/pro-watch-1.png";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const item = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function DrawerCartFavorite({ open }) {
  return (
    <Stack
      spacing={2}
      height="100%"
      component={motion.ul}
      variants={container}
      initial="hidden"
      animate={open ? "visible" : "hidden"}
    >
      <Paper elevation={2} component={motion.li} variants={item}>
        <Stack direction="row" justifyContent="space-between" p="10px" gap={1}>
          <Box alignSelf="center">
            <Tooltip title="Remove Product" arrow>
              <IconButton sx={{ borderRadius: "5px", padding: 0 }}>
                <FaTrashAlt className="delete_icon" />
              </IconButton>
            </Tooltip>
          </Box>
          <Image src={image_1} alt="" height={90} width={75}></Image>
          <Stack flexGrow={1}>
            <Typography
              variant="subtitle1"
              width="202px"
              noWrap
              overflow="hidden"
            >
              Brand
            </Typography>
            <Typography variant="body2" width="202px" noWrap overflow="hidden">
              Modal
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">$3060.00</Typography>
              <Tooltip title="Add To Shopping Cart" arrow>
                <IconButton aria-label="Add To Shopping Cart" color="primary">
                  <ShoppingBag />
                </IconButton>
              </Tooltip>
            </Stack>
            <Divider />
          </Stack>
        </Stack>
      </Paper>

      <Paper elevation={2} component={motion.li} variants={item}>
        <Stack direction="row" justifyContent="space-between" p="10px" gap={1}>
          <Box alignSelf="center">
            <Tooltip title="Remove Product" arrow>
              <IconButton sx={{ borderRadius: "5px", padding: 0 }}>
                <FaTrashAlt className="delete_icon" />
              </IconButton>
            </Tooltip>
          </Box>
          <Image src={image_1} alt="" height={90} width={75}></Image>
          <Stack flexGrow={1}>
            <Typography
              variant="subtitle1"
              width="202px"
              noWrap
              overflow="hidden"
            >
              Brand
            </Typography>
            <Typography variant="body2" width="202px" noWrap overflow="hidden">
              Modal
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">$3060.00</Typography>
              <Tooltip title="Add To Shopping Cart" arrow>
                <IconButton aria-label="Add To Shopping Cart" color="primary">
                  <ShoppingBag />
                </IconButton>
              </Tooltip>
            </Stack>
            <Divider />
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
